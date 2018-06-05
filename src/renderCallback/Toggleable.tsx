import React, { Component, ReactNode, MouseEvent } from 'react';
import { isFunction } from '../utils';

// 属性相关
type Props = Partial<{
    children: RenderCallback;
    render: RenderCallback;
}>;
type RenderCallback = (args: ToggleableRenderArgs) => ReactNode;
type ToggleableRenderArgs = {
    show: boolean;
    toggle: Toggleable['toggle'];
};

// 状态相关
const initialState = {show: false};
type State = Readonly<typeof initialState>;

class Toggleable extends Component<Props, State> {

    readonly state: State = initialState;

    render() {
        const {children, render} = this.props;
        const {show} = this.state;
        const renderArgs = {show, toggle: this.toggle};

        if (render) {
            return render(renderArgs);
        } else if (isFunction(children)) {
            return children(renderArgs);
        } else {
            return null;
        }
    }

    private toggle = (event: MouseEvent<HTMLElement>) => {
        this.setState(prevState => ({show: !prevState.show}));
    };
}

export default Toggleable;