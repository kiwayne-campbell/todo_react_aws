import React, { useState} from 'react';

/* class comonent */

/* class Counter extends React.Component {
    constructor(){
        super();
        this.state = { counter: 0 };
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ counter: this.state.counter+1});
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return <span>{this.state.counter}</span>
    }
} */


/* this is a functional compoent */
const Counter = () => {
    const [clicks, setClicks] = useState(0);

    function handleButtonClick() {
        console.log("hello");
        setClicks(clicks+1);
    }
    return (
        <div>
        <span>you clicked {clicks} times</span>
        <br></br>
        <button onClick={handleButtonClick}>click me</button>
        </div>
        
    );
};


export default Counter; 