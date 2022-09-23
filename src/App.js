import React from 'react';

import './App.css';
import GetProducts from './GetProducts';
import Veggies from './Veggies';
import Fruits from './Fruits';

function App() {
  return (
    <div className="App">
  
       <GetProducts />
       <Veggies />
       <Fruits />

    </div>
  );
}

export default App;
