import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import './css/Pokedex.css';
import Pokemon from './components/Pokemon';
import Loading from './img/pikachu.gif'

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [evolutions, setEvolutions] = useState([]);
  const [loading,setLoading] = useState (false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const resultPoke=[];
      const resultEvo=[];
      for(let i=1;i<=25;i++){
        resultPoke[i-1] = await axios(`https://pokeapi.co/api/v2/pokemon/${i}/`);      
        resultEvo[i-1] = await axios(`https://pokeapi.co/api/v2/pokemon-species/${i}/`); 
      }
      
      setPokemons(resultPoke);
      setEvolutions(resultEvo);
      setLoading(false);
    };
    
    fetchData();    
  }, []);

  if(loading){
    return (
      <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div>
            <img className="pika-center" src={Loading} alt='pikachu runing'></img>
            <p className="text-center text-light font-weight-bold">Cargando...</p>
          </div>
        </div>
      </div>
    );
  }
 
  const pokeFiltered=pokemons.filter(pokeInfo=>{
    return pokeInfo.data.forms[0].name.toLowerCase().includes(search);
    });

  return (    
    <div className='page1-color'>
      <input className='search-bar' type='text' placeholder='Search' onChange={e=>setSearch(e.target.value.toLowerCase())}/>
        <div className='pokemonList'>
          {pokeFiltered.map((pokeInfo,index)=>{
              return(  
                <Link key={index} to={{pathname:`/${pokeInfo.data.forms[0].name}`, data:pokeInfo.data}}>                
                  <Pokemon 
                    key={index}
                    pokeIndex={pokeInfo.data.id}
                    pokeName={pokeInfo.data.forms[0].name}
                    pokeType={pokeInfo.data.types}
                    evolutionFrom={evolutions[index]}
                  />
                </Link>                           
              )
            })}
        </div>    
    </div>
  );
};

export default Pokedex;
