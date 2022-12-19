import '../Styles/userInput.css';

export default function UserInput (props) {
    return (
        <div>
            <input className="input" type="text" onChange={props.onInputChange} />
            <h2 className="message"><span className="count">{props.count}</span> + {props.message}</h2>
        </div>
    );
}
