import React, { SFC } from 'react';
import { Toggleable } from './Toggleable';
import { PanelItemProps, PanelItem } from './PanelItem';

const ToggleableOfPanelItem = Toggleable.ofType<PanelItemProps>();

const PanelViaInjection: SFC<PanelItemProps> = ({title, children}) => (
    <ToggleableOfPanelItem component={PanelItem} props={{title}}>
        {children}
    </ToggleableOfPanelItem>
);

// TS 2.9 可以直接这样写
// const PanelViaInjection: SFC<PanelItemProps> = ({title, children}) => (
//     <Toggleable<PanelItemProps> component={PanelItem} props={{title}}>
//         {children}
//     </Toggleable>
// );

export default PanelViaInjection;