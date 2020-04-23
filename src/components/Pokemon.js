import React, { useState, useEffect } from "react";
import axios from 'axios';



const Pokemon=(props)=>{

    let [evolution, setEvolution] = useState(null);
 
    useEffect(() => {
      const fetchData = async () => {
        let result = await axios(`http://pokeapi.salestock.net/api/v2/evolution-chain/${props.pokeIndex}/`);               
        
        setEvolution(result.data.chain.evolves_to);
      };
      fetchData();    
    }, []);

    return(
        <div id={props.pokeIndex} className='container'>            
            <div className='pokemon'>
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
                    </div>                     
                </div>
            </div>            
        </div>
    )
}
export default Pokemon;



/*
const Pokedex=(props)=>{
    let [evolution, setEvolution] = useState(null);
 
    useEffect(() => {
      const fetchData = async () => {
         let result = await axios(`http://pokeapi.salestock.net/api/v2/pokemon/${props.pokeIndex}/`);               
        
        console.log(result); 
        setEvolution(result);
      };
      fetchData();    
    }, []);

    return(
        <div id={props.pokeIndex} className='container'>            
            <div className='row justify-content-center'>
                
            </div>            
        </div>
    )
}
*/