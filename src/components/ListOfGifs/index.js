import React, {useEffect, useState} from "react"
import Gif from "../Gif"
import getGifs from '../../services/getGifs'
import './styles.css'

export default function ListOfGifs ({params}){
    const {keyword} = params
    const [gifs, setGifs ] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect( function (){
        setLoading(true)
        getGifs(keyword)
        .then( gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    
    },[keyword])  //ejecuta la funcion al cambiar  el valor de keyword

    if (loading) return (<i>Cargando</i>)
   
    return <>
        {
           gifs.map (({id, title, url}) => 
                <Gif 
                key={id} // corregir error de key react
                title={title} 
                url={url} 
                id= {id} 
                />

            ) 
        }
    </>

    

}