import React from 'react'
import {Link, Route} from "wouter"

import './App.css';

import ListOfGifs from './components/ListOfGifs';

// creado desde el video https://www.youtube.com/watch?v=QBLbXgeXMU8&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=2


function App() {  
    return (
    <div className="App">
      <section className="App-content">
        <h1>App con API GIPHY</h1>
        <Link to='/gif/spain'>Gif de spain</Link>
        <Link to='/gif/panda'>Gif de panda</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" 
        />

       
      </section>
    </div>
  )
}

export default App
