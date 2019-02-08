import React from 'react';
import { render } from 'react-dom';
import Input from './Input';

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

render(<App />, document.getElementById('root'));
