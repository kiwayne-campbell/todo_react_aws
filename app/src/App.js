import React, { useState, useEffect } from "react";
import todos from "./apis";
import Search from "./components/Search";
import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";

const appTitle = "To-Do App";


/* functional component */
const App = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await todos.get("/todos");
            setTodoList(data);
        }

        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    }

    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id ));
    };


    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item)
    }
    
    return (
        <div className="ui container center aligned">
            <Section>
                <h1>{appTitle}</h1>
            </Section>
            <Section>
                <Form addTodo={addTodo}/>
            </Section>
            <Section>
                <List 
                    editTodoListProp={editTodo}
                    removeTodoListProp={removeTodo} 
                    list={todoList}/>
            </Section>
        </div>
    )
};

/* class component */
/* class App extends React.Component {
    render() {
        return (
            <div className="ui grid container center aligned">
                <Search />
            </div>
        );
    }
} */


export default App;