import React from 'react';
import './App.css';
// import HelloWorld from './HelloWorld';
// import Bomb from './Bomb';
// import RouletteGun from './RouletteGun';
import Accordion from './Accordion';

function App(props) {
  return (
    <div className="App">
      <Accordion sections={props.sections} />
    </div>
  );
}

export default App;
