import React from 'react';


class Button extends React.Component {
    constructor() {
        super(); 
        this.state = { counter: 0};
/*         this.handleButtonClick = this.handleButtonClick.bind(this);
 */    }

    handleButtonClick = () => {
        this.setState({ counter: 1 });
    }

    render() {
        return <button onClick={this.handleButtonClick}>{this.state.counter}</button>
    }
}

export default Button;