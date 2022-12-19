import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Counter from './components/Counter';
import UserInput from './components/Input';

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState('');
  const handlerInput = (e) => {
    setInput(e.target.value);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Finally i`ve started React!
        </p>
        <Counter onCountClickUp={() => setCount(count + 1)}
                 onCountClickDown={() => setCount(count - 1)}
                 count={count} />
        <UserInput onInputChange={handlerInput} message={input} count={count} />
      </header>
    </div>
  );
}

export default App;
