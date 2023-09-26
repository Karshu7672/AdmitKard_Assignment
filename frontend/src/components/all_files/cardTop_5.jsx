import React from 'react';


export default function CardTop({info}){
    return(
        <div>
        {info[0]}
        <span>{info[1]}</span>
        </div>
    )
}
