import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Pokedex from './components/Pokedex';
import Evolution from './components/Evolution'

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result=[];
      for(let i=1;i<=2;i++){
        result[i-1] = await axios(`http://pokeapi.salestock.net/api/v2/pokemon/${i}/`); 
      }
      //console.log(result); 
      setPokemons(result);
    };
    
    fetchData();    
  }, []);


  return (    
    <div>
      {pokemons 
          ?(<>
            <div className='pokemonList'>
            {pokemons.map((pokeInfo,index)=>{
                return(                  
                  <Pokedex 
                    key={index}
                    pokeIndex={index+1}
                    pokeName={pokeInfo.data.forms[0].name}
                    pokeType={pokeInfo.data.types}
                  />                         
                )
              })}
            </div>
            {console.log(pokemons)}
            <Evolution/>                
          </>)
          :(<>Cargando...</>)      
        }
    </div>
  );
};

export default App;

/*
function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const vect=new Array(2);
    const fetchData = async () => {
      const result=[];
      for(let i=1;i<=1;i++){
        result[i-1] = await axios(`http://pokeapi.salestock.net/api/v2/pokemon/${i}/`);               
      
      }
      //console.log(result); 
      setPokemons(result);
    };
    
    fetchData();    
  }, []);


  return (    
    <div>
      {pokemons 
          ?(<>{console.log(pokemons)}            
          {pokemons.map((pokeInfo,index)=>{
            return(
              <Pokedex key={index}
                pokeIndex={index+1}
                pokeName={pokeInfo.data.forms[0].name}
                pokeType={pokeInfo.data.types}
              />
            )
          })}        
          </>)
          :(<>Cargando...</>)      
        }
    </div>
  );
};
*/


/*
  useEffect(() => {
    const fetchData = async () => {
      let result =await axios(`http://pokeapi.salestock.net/api/v2/pokemon/?limit=2`)
      setPokemons(result.data.results); 
    };
    
    fetchData();    
  }, []);


  return (    
    <div>
      {pokemons 
          ?(<>{console.log(pokemons)}            
          {pokemons.map((pokeInfo,index)=>{
            return(
              <Pokedex key={index}
                pokeIndex={index+1}
                pokeName={pokeInfo.name}
                pokeURL={pokeInfo.url}
              />
            )
          })}        
          </>)
          :(<>Cargando...</>)      
        }
    </div>
*/