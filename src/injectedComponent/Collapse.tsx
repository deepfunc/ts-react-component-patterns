import React, { Component } from 'react';
import PanelViaInjection from './PanelViaInjection';

class Collapse extends Component {

    render() {
        return (
            <div>
                <PanelViaInjection title="标题一"><p>内容1</p></PanelViaInjection>
                <PanelViaInjection title="标题二"><p>内容2</p></PanelViaInjection>
                <PanelViaInjection title="标题三"><p>内容3</p></PanelViaInjection>
            </div>
        );
    }
}

export default Collapse;