import { render } from '@testing-library/react';
import React,{Component} from 'react';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';
import Series from '../../container/series';
import SeriesList from '../SeriesList';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
        <Series />
        <SeriesList/>
      </div>
    );
  }
}

export default App;
