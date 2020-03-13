import { IAction } from './store';
import { ACTION_TYPE_INCREMENT } from './actions';

export const appReducer = (state: any, action: IAction) => {
    if (action.type === ACTION_TYPE_INCREMENT) {
        let counter = state.counter || 0;

        return { counter: ++counter };
    }

    return state;
};
