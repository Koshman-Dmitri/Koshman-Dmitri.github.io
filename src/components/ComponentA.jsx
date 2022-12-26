import { useContext } from "react";
import { Context } from "../Context";

const ComponentA = () => {
    const [context, setContext] = useContext(Context);
    return (
        <div>
            ComponentA:
            <button onClick={ () => setContext('New Value') }>
                Change Context Value
            </button>
        </div>
    );
}

export default ComponentA;