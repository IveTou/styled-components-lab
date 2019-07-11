import React from 'react';
import Button from './components/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <Button value='button' onClick={() =>console.log('sa')}/>
    </div>
  );
}

export default App;
