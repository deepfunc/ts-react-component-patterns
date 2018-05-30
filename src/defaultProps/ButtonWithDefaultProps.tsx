import React, { SFC, MouseEvent } from 'react';
import { withDefaultProps } from '../utils';

const defaultProps = {color: 'blue'};
type DefaultProps = typeof defaultProps;

type Props = { onClick(e: MouseEvent<HTMLElement>): void; } & DefaultProps;

const Button: SFC<Props> = ({onClick: handleClick, color, children}) => (
    <button style={{color}} onClick={handleClick}>{children}</button>
);

export default withDefaultProps(defaultProps, Button);