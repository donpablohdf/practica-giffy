import React from "react";

export default function Detail ({params}){
    console.log(params);
    return <h1>Gif con id {params.id}</h1>
}