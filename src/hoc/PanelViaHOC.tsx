import { PanelItem } from './PanelItem';
import withToggleable from './withToggleable';

const PanelViaHOC = withToggleable(PanelItem);

export default PanelViaHOC;