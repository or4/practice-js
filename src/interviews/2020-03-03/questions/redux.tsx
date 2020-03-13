// Как устроен redux
// https://habr.com/ru/post/439104/
// https://medium.com/devschacht/jakob-lind-learn-redux-by-coding-a-mini-redux-d1a58e830514
// https://medium.com/devschacht/jakob-lind-code-your-own-redux-part-2-the-connect-function-d941dc247c58

import * as React from 'react';

type TListener = () => void;
interface IAction {
	type: string;
	payload: object;
}
type TState = object;
type TDispatch = (action: IAction) => IAction;
interface IStore {
	getState: () => TState;
	dispatch: TDispatch;
	subscribe: (listener: TListener) => () => void;
	unsubscribe: (listener: TListener) => void;
}
type TReducer = (state: TState, action: IAction) => TState;

type TComponentProps = object;
type TMapStateToProps = (state: TState, props: TComponentProps) => object;
type TMapDispatchToProps = (dispatch: TDispatch, props: TComponentProps) => object;

export function createStore(reducer: TReducer, initialState: TState): IStore {
	const listeners: TListener[] = [];
	let state = initialState;

	return {
		getState() {
			return state;
		},

		dispatch(action: IAction) {
			state = reducer(state, action);
			listeners.forEach(listener => listener());

			return action;
		},

		subscribe(listener: TListener) {
			listeners.push(listener);

			return this.unsubscribe.bind(null, listener);
		},

		unsubscribe(listener: TListener) {
			const index = listeners.indexOf(listener);

			if (index >= 0) {
				listeners.splice(index, 1);
			}
		},
	};
}

// ********************************************************

const store = createStore(state => state, {});

export const ReduxContext = React.createContext({});

export class App extends React.Component {
	public render() {
		return (
			<ReduxContext.Provider value={store}>
				<Button />
			</ReduxContext.Provider>
		);
	}
}

function ButtonComponent() {
	return <button />;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

const Button = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ButtonComponent);

// ********************************************************

export function connect(mapStateToProps: TMapStateToProps, mapDispatchToProps: TMapDispatchToProps) {
	return function(WrappedComponent: React.ComponentType) {
		class ConnectedWrappedComponent extends React.Component {
			private unsubscribe?: () => void;

			public render() {
				const { store } = this.context;

				return (
					<WrappedComponent
						{...this.props}
						{...mapStateToProps(store.getState(), this.props)}
						{...mapDispatchToProps(store.dispatch, this.props)}
					/>
				);
			}

			public componentDidMount() {
				const { store } = this.context;

				this.unsubscribe = store.subscribe(this.handleChange.bind(this));
			}

			public componentWillUnmount() {
				this.unsubscribe && this.unsubscribe();
			}

			private handleChange() {
				this.forceUpdate();
			}
		}

		ConnectedWrappedComponent.contextType = ReduxContext;

		return ConnectedWrappedComponent;
	};
}
