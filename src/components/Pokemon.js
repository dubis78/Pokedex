import React from "react";
import '../css/Pokemon.css'

const Pokemon=(props)=>{   
    return(
        <div id={props.pokeIndex} className='container'>            
            <div className='pokemon cardidea'>
                <div className='col-12'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokeIndex}.png`} alt={`${props.pokeName}`}></img>
                    <div className='pokeInfo'>
                        <p className="font-weight-bold">Nombre:</p>
                        <p>{props.pokeName}</p>
                        <p className="font-weight-bold">Tipo:</p>
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
                                    <p className="font-weight-bold">Evolución de:</p>
                                    <p>{props.evolutionFrom.data.evolves_from_species.name}</p>  
                                </>
                            :
                                <>
                                    <p className="font-weight-bold">Evolución de:</p>
                                    <p>N/A</p>
                                </>     
                        }                        
                    </div> 
                    <h6 className='pokeNumber'>{props.pokeIndex}</h6>                    
                </div>
            </div>            
        </div>
    )
}
export default Pokemon;

