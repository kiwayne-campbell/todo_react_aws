import React, { useState} from "react";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() ==="") return;
        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };

    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input
                        value={inputValue}
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="start typing..."


                        ></input>
                        
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button rectangle icon green">
                            <i className="plus icon white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

/* class Form extends React.Component {
    constructor() {
        super();
        this.state = { value: "write your name"};
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
    
            console.log(this.state.value);
    }

    handleInputChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input id="name" type="text" value={this.state.value} onChange={(event) => this.handleInputChange(event)}/>
                <input type="submit" />
            </form>
        )
    }
} */

export default Form;