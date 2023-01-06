import { useEffect, useReducer, useRef } from "react";
import '../Styles/timer.css';

const initialState = {
    isRunning: false,
    time: 0
};

const Stopwatch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    useEffect(() => {
        if (!state.isRunning) return;
        idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
        return () => {
            clearInterval(idRef.current);
            idRef.current = 0;
        };
    }, [state.isRunning]);

    return (
        <div className="stopwatch">
            {state.time} s
            <button onClick={() => dispatch({ type: 'start' })}>Start</button>
            <button onClick={() => dispatch({ type: 'stop' })}>Stop</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case 'start':
            return { ...state, isRunning: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'reset':
            return { isRunning: false, time: 0 };
        case 'tick':
            return { ...state, time: state.time + 1 };
        default:
            throw new Error();
    }
}

export default Stopwatch;
