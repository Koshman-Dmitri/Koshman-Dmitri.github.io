import React from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./todoApp.css";

const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
         }
    };

    const enterHandler = (e) => {
        if (e.keyCode === 13) addTodo();
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => todo !== text);
        setTodos(newTodos);
    };

    return (
        <div className="todoApp-wrapper">
            <h1 className="title">React Todo App</h1>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} enterHandler={enterHandler} />
            <TodoList list={todos} remove={deleteTodo} />
        </div>
    )
}

export default TodoApp;
