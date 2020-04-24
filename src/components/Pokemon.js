import React from "react";
import '../css/Pokemon.css'

const Pokemon=(props)=>{   
    return(
        <div id={props.pokeIndex} className='container'>            
            <div className='pokemon cardidea'>
                <div className='col-12'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokeIndex}.png`} alt={`${props.pokeName}`}></img>
                    <div className='pokeInfo'>
                        <p>Nombre:</p>
                        <p>{props.pokeName}</p>
                        <p>Tipo:</p>
                        {props.pokeType.map((typeInfo,index)=>{
                            return(                
                                <p key={`${props.pokeName}${index}`}>
                                    {typeInfo.type.name}
                                </p>               
                            )
                        })}
                        {props.evolutionFrom.data.evolves_from_species != null 
                            ?                            
                                <>
                                    <p>Evolución de:</p>
                                    <p>{props.evolutionFrom.data.evolves_from_species.name}</p>  
                                </>
                            :
                                <>
                                    <p>Evolución de:</p>
                                    <p>N/A</p>
                                </>     
                        }
                        <h6 className='pokeNumber'>{props.pokeIndex}</h6>
                    </div>                     
                </div>
            </div>            
        </div>
    )
}
export default Pokemon;
/*
{if (props.evolutionFrom.data.evolves_from_specie != null) {
    return(
        <p>Evolución de:</p>
        <p>props.evolutionFrom.data.evolves_from_specie.name<p>
    )    
}}
*/


