//import '../Styles/counterStyle.css';
import style from '../Styles/counter.module.css';

function Counter (props) {
  return (
    <div>
      <h3 className={style.title}>Count = {props.count}</h3>
      <button className={style.btn_up} onClick={ props.onCountClickUp }>
        Увеличить
      </button>
      <button className={style.btn_down} onClick={ props.onCountClickDown }>
        Уменьшить
      </button>
    </div>
  );
}

export default Counter;