import "./todoInput.css";

const TodoInput = ({ todo, setTodo, addTodo, enterHandler }) => {
    const addHandler = () => {
        document.querySelector('.input-wrapper input').focus();
        addTodo();
    };

    return (
        <div className="input-wrapper">
            <input type='text'
                name='todo-input'
                value={todo}
                placeholder='Create a new todo'
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={enterHandler} />
            <button className="add-button" onClick={addHandler}>Add</button>
        </div>
    );
};

export default TodoInput;
