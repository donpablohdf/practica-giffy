import React, { useState, useEffect } from "react"
import {Link, useLocation} from 'wouter'
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs";

const POPULAR_GIFTS= ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home (){
    const [keyword, setKeyword]= useState('');
    const [path, pushLocation] = useLocation()

    

    const handleSubmit = evt =>{
        evt.preventDefault() // anula su comportamiento por defecto ya que sin él no sale el log console.log(keyword);       
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    
    const handleChange = evt => {
        setKeyword(evt.target.value)

    }
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} />
        </form>
        <h3 className="App-title">Última busqueda</h3>
        
        <h3 className="App-title">Los gifts más populares</h3>
       
        <ul>
            {
               POPULAR_GIFTS.map( (popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>{popularGif}</Link>
                    </li>
                )

                )
                
            }
        </ul>
    </>)
}