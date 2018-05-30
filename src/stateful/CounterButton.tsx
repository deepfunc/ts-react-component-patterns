import React, { Component } from 'react';

const initialState = {count: 0};
type State = Readonly<typeof initialState>;

class CounterButton extends Component<{}, State> {

    readonly state: State = initialState;

    render() {
        const {count} = this.state;

        return (
            <div>
                <button onClick={this.handleIncrement}>增加</button>
                <p>当前计数：{count}</p>
            </div>
        )
    }

    private handleIncrement = () => this.setState(prevState => ({count: prevState.count + 1}));
}

export default CounterButton;

