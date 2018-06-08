import React, { Component, ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Toggleable, ToggleableComponentProps } from './Toggleable';
import { getHOCComponentName } from '../utils';

function withToggleable<OriginalProps extends ToggleableComponentProps>(
    WrappedComponent: ComponentType<OriginalProps>) {

    type Props = Omit<OriginalProps, keyof ToggleableComponentProps>;

    class WithToggleable extends Component<Props> {

        static readonly displayName = getHOCComponentName('WithToggleable', WrappedComponent);
        static readonly WrappedComponent = WrappedComponent;

        render() {
            return (
                <Toggleable render={renderProps => <WrappedComponent {...this.props} {...renderProps}/>}/>
            );
        }
    }

    return hoistNonReactStatics<Props, OriginalProps>(WithToggleable, WrappedComponent);
}

export default withToggleable;