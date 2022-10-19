import React, {useContext} from "react";
import StaticContext from '../../context/StaticContext'

export default function Detail ({params}){
    alert("gg");
    console.log(params);
    const context = useContext(StaticContext);
    console.log(context);
    return <h1>Gif con id {params.id}</h1>
}