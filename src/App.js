import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Counter from './components/Counter';
import UserInput from './components/Input';

import { Context } from './Context';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState('');
  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const [context, setContext] = useState('default context value');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let`s try some React!
        </p>
        <Counter onCountClickUp={() => setCount(count + 1)}
                 onCountClickDown={() => setCount(count - 1)}
                 count={count} />
        <UserInput onInputChange={handlerInput} message={input} count={count} />

        <Context.Provider value={ [context, setContext] }>
          <ComponentA />
          <ComponentB />
        </Context.Provider>
        
      </header>
    </div>
  );
}

export default App;
