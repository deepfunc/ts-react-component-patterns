## With TypeScript 2.8：更好的 React 组件设计模式

近两年来一直在搞 React 应用开发，TypeScript 是不久前才学上的。国内有很多讲解 React 和 TypeScript 的教程，但如何将 TypeScript 更好地应用到 React 组件设计模式的文章却几乎没有，特别是 TS 2.8的一些新特性，如：条件类型、条件类型中的类型引用、重载访问修饰符等。这些新特性如何应用于 React 组件开发？没办法只能去翻一些国外的文章，结合 TS 的官方文档慢慢摸索... 于是就有了想法把这个过程整理成文档，希望能让读到的朋友少踩点坑。无奈水平有限，难免出现错漏，欢迎大家指出，共同进步。

本文有点长，希望你找个舒服的椅子放轻松点，我们马上开始。

> 所有示例代码都放在 [Github仓库](https://github.com/deepfunc/ts-react-component-patterns)
>
> 所有示例代码均使用 React 16.3.2、TypeScript 2.8 + strict mode 编写



## 开始

本文假设你已经对 React、TypeScript 有一定的了解。并且本文中不会讲解例如：webpack 打包、Babel 转码、TypeScript 编译选项这一类的问题，而将一切焦点放在如何将 TS 2.8 更好地应用到 React 组件设计模式中。首先，我们来谈谈无状态组件。



## 无状态组件

无状态组件就是没有 `state` 的，通常我们也叫做纯函数组件。用原生 JS 我们可以这样写一个按钮组件：

```typescript
import React from 'react';

const Button = ({onClick: handleClick, children}) => (
  <button onClick={handleClick}>{children}</button>
);
```



如果你把代码直接放到 TSX 文件中，`tsc` 编译器马上会提示错误：有隐含的 any 类型，因为用了严格模式。我们必须明确的定义组件属性，修改一下：

```typescript
import React, { MouseEvent, ReactNode } from 'react';

interface Props { 
 onClick(e: MouseEvent<HTMLElement>): void;
 children?: ReactNode;
};

const Button = ({ onClick: handleClick, children }: Props) => (
  <button onClick={handleClick}>{children}</button>
);
```



OK，错误没有了！好像已经完事了？其实再花点心思可以做的更好。

React 中有个预定义的类型，`SFC`：

```typescript
type SFC<P = {}> = StatelessComponent<P>;
```

他是 `StatelessComponent` 的一个别名，而 `StatelessComponent` 声明了纯函数组件的一些预定义示例属性和静态属性，如：`children`、`defaultProps`、`displayName` 等，所以我们不需要自己写所有的东西。



最后我们的代码是这样的：

![](/images/stateless.png)



