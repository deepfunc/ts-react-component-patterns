import React, { Component, ComponentType, ReactNode, MouseEvent } from 'react';
import { isFunction, withDefaultProps } from '../utils';

const defaultInjectedProps = {props: {} as { [propName: string]: any }};
type DefaultInjectedProps = typeof defaultInjectedProps;
type Props = Partial<{
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps<any>>
}> & DefaultInjectedProps;

type RenderCallback = (args: ToggleableComponentProps) => ReactNode;
type ToggleableComponentProps<P extends object = object> = {
    show: boolean;
    toggle: Toggleable['toggle'];
} & P;

const initialState = {show: false};
type State = Readonly<typeof initialState>;

class Toggleable extends Component<Props, State> {

    readonly state: State = initialState;

    render() {
        const {component: InjectedComponent, children, render, props} = this.props;
        const {show} = this.state;
        const renderProps = {show, toggle: this.toggle};

        if (InjectedComponent) {
            return (
                <InjectedComponent {...props} {...renderProps}>
                    {children}
                </InjectedComponent>
            );
        }

        if (render) {
            return render(renderProps);
        } else if (isFunction(children)) {
            return children(renderProps);
        } else {
            return null;
        }
    }

    private toggle = (event: MouseEvent<HTMLElement>) => {
        this.setState(prevState => ({show: !prevState.show}));
    };
}

const ToggleableWithDefaultInjectedProps = withDefaultProps(defaultInjectedProps, Toggleable);

export {
    ToggleableComponentProps,
    ToggleableWithDefaultInjectedProps as Toggleable
};