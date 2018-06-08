import React, { Component, ComponentType, ReactNode, MouseEvent } from 'react';
import { isFunction } from '../utils';

type DefaultInjectedProps<P extends object = object> = { props: P };
const defaultInjectedProps: DefaultInjectedProps = {props: {}};

type Props<P extends object = object> = Partial<{
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps & P>
} & DefaultInjectedProps<P>>;

type RenderCallback = (args: ToggleableComponentProps) => ReactNode;
type ToggleableComponentProps = {
    show: boolean;
    toggle: Toggleable['toggle'];
};

const initialState = {show: false};
type State = Readonly<typeof initialState>;

class Toggleable<T extends object = object> extends Component<Props<T>, State> {

    static ofType<T extends object>() {
        return Toggleable as Constructor<Toggleable<T>>;
    }
    static readonly defaultProps: Props = defaultInjectedProps;
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

export { ToggleableComponentProps, Toggleable };