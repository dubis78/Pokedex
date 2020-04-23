import React, { useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom';
import '../css/About.css'

const About=(props)=>{

    if(typeof props.location.state === 'undefined'){
        return (
            <Redirect to="/" />
        )
    }
  
    return(
        <>    
        <div className='container'>
            <div className="row justify-content-center align-items-center minh-100">
                <div className='card-data'>
                    <div className='pics-container'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.location.data.id}.png`} alt={`${props.location.data.name}`}></img>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.location.data.id}.png`} alt={`${props.location.data.name}`}></img>
                    </div>
                    <p className="text-center">Altura: {props.location.data.height}</p>
                    <p className="text-center">Peso: {props.location.data.weight}</p>
                    <p className="text-center">Abilidades:</p>
                    {props.location.data.abilities.map((abilities,index)=>{
                            return(                
                                <p className="text-center" key={`${index}`}>
                                    {abilities.ability.name}
                                </p>               
                            )
                        })}
                        {/*<p className="text-center">Historial evoluciones:</p>*/}
                    <Link to='/'>
                        <h6 className='btn_margin d-block btn btn-sm btn-primary'>Return</h6>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;