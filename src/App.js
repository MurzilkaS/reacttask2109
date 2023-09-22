import React from 'react';
import './App.css';
import Nameform from './component/Nameform';
import Textform from './component/Textform';
import Todolist from './component/Todolist';
function App() {
  return (
    <div className="App">
     <Nameform />
     <Textform />
     <Todolist />
    </div>
  );
}

export default App;
