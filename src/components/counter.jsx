function Counter (props) {
  return (
    <div>
      <h3>Count = {props.count}</h3>
      <button onClick={ props.onCountClickUp }>
        Увеличить
      </button>
      <button onClick={ props.onCountClickDown }>
        Уменьшить
      </button>
    </div>
  );
}

export default Counter;