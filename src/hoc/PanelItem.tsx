import React, { SFC } from 'react';
import { ToggleableComponentProps } from './Toggleable';

type PanelItemProps = { title: string };

const PanelItem: SFC<PanelItemProps & ToggleableComponentProps> = props => {
    const {title, children, show, toggle} = props;

    return (
        <div onClick={toggle}>
            <h1>{title}</h1>
            {show ? children : null}
        </div>
    );
};

export { PanelItemProps, PanelItem };