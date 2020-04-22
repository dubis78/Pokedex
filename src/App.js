import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Pokedex from './components/Pokedex';
import Evolution from './components/Evolution'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading,setLoading] = useState (false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result=[];
      for(let i=1;i<=2;i++){
        result[i-1] = await axios(`http://pokeapi.salestock.net/api/v2/pokemon/${i}/`); 
      }
      //console.log(result); 
      setPokemons(result);
      setLoading(false);
    };
    
    fetchData();    
  }, []);

  if(loading){
    return <p>Cargando...</p>;
  }
 
  const pokeFiltered=pokemons.filter(pokeInfo=>{
    console.log(pokeInfo.data.forms[0].name.toLowerCase().includes(search));
    return pokeInfo.data.forms[0].name.toLowerCase().includes(search);
    });

  return (    
    <div>
      <input type='text' placeholder='Search' onChange={e=>setSearch(e.target.value.toLowerCase())}/>
        <div className='pokemonList'>
          {pokeFiltered.map((pokeInfo,index)=>{
              return(                  
                <Pokedex 
                  key={index}
                  pokeIndex={pokeInfo.data.id}
                  pokeName={pokeInfo.data.forms[0].name}
                  pokeType={pokeInfo.data.types}
                />                         
              )
            })}
        </div>
        {console.log(pokemons)}     
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