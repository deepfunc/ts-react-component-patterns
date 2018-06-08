import React, { SFC, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './stateless/Button';
import Collapse from './renderCallback/Collapse';
import CollapseWithPanelViaInjection from './injectedComponent/Collapse';
import CollapseWithGeneric from './generic/Collapse';
import CollapseWithHOC from './hoc/Collapse';

const Demo: SFC = () => (
    <Fragment>
        <p>折叠面板：渲染回调模式</p>
        <Collapse/>
        <p>折叠面板：组件注入模式</p>
        <CollapseWithPanelViaInjection/>
        <p>折叠面板：泛型组件</p>
        <CollapseWithGeneric/>
        <p>折叠面板：HOC</p>
        <CollapseWithHOC/>
    </Fragment>
);

ReactDOM.render(<Demo/>, document.getElementById('root'));