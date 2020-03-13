// Как устроен redux
// https://habr.com/ru/post/439104/
// https://medium.com/devschacht/jakob-lind-learn-redux-by-coding-a-mini-redux-d1a58e830514
// https://medium.com/devschacht/jakob-lind-code-your-own-redux-part-2-the-connect-function-d941dc247c58

import * as React from 'react';
import { incrementValue } from './actions';
import { ReduxContext, connect } from './connect';
import { appReducer } from './reducers';
import { createStore } from './store';

import './redux.css';

const store = createStore(appReducer, { counter: 0 });

interface IProps {
    counter: number;
    incrementValue: () => void;
}

export class App extends React.Component {
    public render() {
        return (
            <ReduxContext.Provider value={{ store }}>
                <Button />
            </ReduxContext.Provider>
        );
    }
}

function ButtonComponent({ counter, incrementValue }: IProps) {
    return <button onClick={incrementValue}>{`Test Button ${counter}`}</button>;
}
interface IAppState {
    counter: number;
}

const mapStateToProps = ({ counter }: IAppState) => ({ counter });
const mapDispatchToProps = (dispatch: any) => ({
    incrementValue: () => dispatch(incrementValue()),
});

const Button = connect(
    mapStateToProps as any,
    mapDispatchToProps as any
)(ButtonComponent as any);
