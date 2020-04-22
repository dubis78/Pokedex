import React, { useState, useEffect } from "react";
import axios from 'axios';

const Evolution=(props)=>{

    let [evolution, setEvolution] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
          const result=[];
          for(let i=1;i<=1;i++){
              result[i-1] = await axios(`http://pokeapi.salestock.net/api/v2/evolution-chain/${i}/`);               
          }
          setEvolution(result.data);
        };
        fetchData();    
      }, []);

    return(
        <div id='1' className='container'>            
            <div className='row justify-content-center'>
                <div className='col-12'>
                    {/*holis*/}                       
                </div>
            </div>            
        </div>
    )
}
export default Evolution;

/*

  import React, { useState, useEffect } from "react";
import axios from 'axios';

const Evolution=(props)=>{

    let [evolution, setEvolution] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
          const result=[];
          for(let i=1;i<=1;i++){
              result[i-1] = await axios(`http://pokeapi.salestock.net/api/v2/evolution-chain/${i}/`);               
          }
          setEvolution(result.data);
        };
        fetchData();    
      }, []);

    return(
        <div id='1' className='container'>            
            <div className='row justify-content-center'>
                <div className='col-12'>
                {evolution 
                    ?(<>
                        {console.log(evolution)}    
                        holis                         
                    </>)
                    :(<></>)      
                }              
                </div>
            </div>            
        </div>
    )
}
export default Evolution;
*/
