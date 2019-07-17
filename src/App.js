import React from 'react';
import logo from './logo.svg';
import './App.css';
// import DogsList from './componets/DogsList'
import DogsListContainer from './componets/DogsListContainer';
import { Route } from 'react-router-dom'
import DogBreedImages from './componets/DogBreedImages'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main>
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />
      </main>
    </div>
  );
}

export default App;
