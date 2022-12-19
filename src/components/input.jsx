export default function UserInput (props) {
    return (
        <div>
            <input type="text" onChange={props.onInputChange} />
            <h2>{props.count} + {props.message}</h2>
        </div>
    );
}
