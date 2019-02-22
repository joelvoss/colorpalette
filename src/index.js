import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Palette from './components/Palette';

/**
 * Application
 */
function App() {
  return (
    <>
      <h1>Colorpalette</h1>
      <Palette />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
