import React, { SFC } from 'react';
import Toggleable from './Toggleable';

type Props = { title: string };

const Panel: SFC<Props> = ({title, children}) => (
    <Toggleable
        render={({show, toggle}) => (
            <div onClick={toggle}>
                <h1>{title}</h1>
                {show ? {children} : null}
            </div>
        )}
    />
);

export default Panel;

