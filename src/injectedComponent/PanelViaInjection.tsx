import React, { SFC } from 'react';
import { Toggleable } from './Toggleable';
import { PanelItemProps, PanelItem } from './PanelItem';

const PanelViaInjection: SFC<PanelItemProps> = ({title, children}) => (
    <Toggleable component={PanelItem} props={{title}}>
        {children}
    </Toggleable>
);

export default PanelViaInjection;