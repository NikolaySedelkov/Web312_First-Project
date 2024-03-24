import { useState } from 'react';
import './App.css';
import FormSize from './components/FormSize/FormSize';
import SizeBlock from './components/SizeBlock/SizeBlock';

function App() {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  const inputSize = e => {
    const {name, value} = e.target;
    setSize({...size, [name]: value});
  }

  return (
    <div className="App">
      <FormSize
        size={size}
        onInput={inputSize}
      />
      <SizeBlock
        width={size.width}
        height={size.height}
      />
    </div>
  );
}

export default App;
