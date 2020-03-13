type TListener = () => void;
export interface IAction {
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
export type TMapStateToProps = (state: TState, props: TComponentProps) => any;
export type TMapDispatchToProps = (dispatch: TDispatch, props: TComponentProps) => any;

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
