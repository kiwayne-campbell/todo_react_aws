import React from "react";
import Todo from "./Todo.js";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderList = list.map(
        (item) => (
            <Todo 
                title={item.title} 
                completed={item.completed} 
                removeTodoItemProp={(e) => removeTodoListProp(item._id)} 
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
            />
        )
    );
        return (
            <div className="ui grid center aligned">
                {renderList}
            </div>
        );
    };


/* This is fuctonal component example with wikipedia API */
/* const List = ({ results }) => {
    const renderList = results.map((item) => {
        return (
            <div key={item.pageid} className="ui segment">
                <h1>
                    <a 
                    href={"https://en.wikipedia.org?curid=" + item.pageid} 
                    className="header"
                    target="_blank"
                    rel="noreferrer"
                    >{item.title}</a>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
            </div>
        );
    });

    return renderList;
} */

export default List;