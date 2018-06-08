import React, { Component } from 'react';
import PanelViaHOC from './PanelViaHOC';

class Collapse extends Component {

    render() {
        return (
            <div>
                <PanelViaHOC title="标题一"><p>内容1</p></PanelViaHOC>
                <PanelViaHOC title="标题二"><p>内容2</p></PanelViaHOC>
            </div>
        );
    }
}

export default Collapse;