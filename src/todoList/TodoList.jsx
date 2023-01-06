import { useEffect } from "react";
import "./todoList.css";

const TodoList = ({ list, remove }) => {
    const todoList = document.querySelector('.todo-list');
    useEffect(() => {
        if (todoList?.clientHeight >= 230) todoList.style.overflow = 'auto';
        if (todoList?.clientHeight < 230) todoList.style.overflow = '';
    });

    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    {list.map((entry, index) => (
                        <div key={index} className="todo">
                            <li>{index + 1}. {entry}</li>
                            <button className="delete-button" onClick={() => { remove(entry) }}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <p className="empty">No task found</p>
            )}
        </>
    );
};

export default TodoList;
