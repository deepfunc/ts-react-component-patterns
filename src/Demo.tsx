import React, { SFC, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './stateless/Button';
import Collapse from './renderCallback/Collapse';
import CollapseWithPanelViaInjection from './injectedComponent/Collapse';

const Demo: SFC = () => (
    <Fragment>
        <p>折叠面板：渲染回调模式</p>
        <Collapse/>
        <p>折叠面板：组件注入模式</p>
        <CollapseWithPanelViaInjection/>
    </Fragment>
);

ReactDOM.render(<Demo/>, document.getElementById('root'));