import React, { SFC, MouseEvent } from 'react';

interface Props {
    onClick(e: MouseEvent<HTMLElement>): void;
}

const Button: SFC<Props> = ({onClick: handleClick, children}) => (
    <button onClick={handleClick}>{children}</button>
);

export default Button;