import React from 'react';
import './App.css';
import Cards from './Cards';
import Filters from './Filters';
export default function App() {

  return <div className='app'>
    <h1 className="space">Space X Launch Program</h1>
    <div className="content">
      <Filters />
      <Cards />
    </div>
  </div>;
}
