import React, { SFC } from 'react';
import { Toggleable } from './Toggleable';
import { PanelItemProps, PanelItem } from './PanelItem';

const ToggleableOfPanelItem = Toggleable.ofType<PanelItemProps>();

const PanelViaInjection: SFC<PanelItemProps> = ({title, children}) => (
    <ToggleableOfPanelItem component={PanelItem} props={{title}}>
        {children}
    </ToggleableOfPanelItem>
);

export default PanelViaInjection;