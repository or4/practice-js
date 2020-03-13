import * as React from 'react';
import { TMapStateToProps, TMapDispatchToProps } from './store';

export const ReduxContext = React.createContext({});

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
