import React from 'react'
import {Link, Route} from "wouter"
import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail';

// creado desde el video https://www.youtube.com/watch?v=QBLbXgeXMU8&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=2

// custom hooks y context https://www.youtube.com/watch?v=2qgs7buSnHQ&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=3

// https://github.com/donpablohdf/practica-giffy.git

function App() {  
    return (
    <div className="App">
      <section className="App-content">
        
        <Link to='/' className='App-logo'>INICIO</Link>        
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route
          component={Detail}
          path="gif/:id"
        />

       
      </section>
    </div>
  )
}

export default App
