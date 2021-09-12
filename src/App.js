import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LazyInitial from '../src/Components/LazyInitial';
import UseEffectTutorial from './Components/UseEffectTutorial';
import ParentComponent from './Components/UseContextTutorial/ParentComponent';
import UseReducerTutorial from './Components/UseReducerTutorial';

function App() {
  return (
    <div>
      <UseReducerTutorial/>
    </div>
  )
}

export default App;
