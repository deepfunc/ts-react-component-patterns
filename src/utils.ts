import { ComponentType } from 'react';

function withDefaultProps<DP extends object, P extends DP>(defaultProps: DP, Cmp: ComponentType<P>) {
    // 首先将必填属性抽取出来
    type RequiredProps = Omit<P, keyof DP>;
    // 然后重新构造属性类型定义，可选的默认值属性 + 必填属性
    type Props = Partial<DP> & RequiredProps;

    // 把默认值设置好
    Cmp.defaultProps = defaultProps;
    // 返回处理好的组件类型
    return (Cmp as ComponentType<any>) as ComponentType<Props>;
}

function isFunction<T extends Function>(value: any): value is T {
    return typeof value === 'function';
}

function getComponentName(component: ComponentType<any>) {
    return component.displayName || (component as any).name;
}

function getHOCComponentName(hocName: string, component: ComponentType<any>) {
    return `${hocName}(${getComponentName(component)})`;
}

export { withDefaultProps, isFunction, getComponentName, getHOCComponentName };