import React from "react";
import {Link, Redirect} from 'react-router-dom';
import '../css/About.css'

const About=(props)=>{

    if(props.location.hasOwnProperty('data')){
        return(              
            <div className='about-container'>
                <div className="row justify-content-center align-items-center">
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
                            )})}
                        {/*<p className="text-center">Historial evoluciones:</p>*/}
                        <div className="stats text-center">
                            <h3 className="p-Stats"> Stats </h3>
                            <div className="pokeContainer">
                            {props.location.data.stats.map(({ base_stat, stat }, i) => (
                                <div key={i}>
                                    <span className="statName">
                                        {" "}
                                        <b>{stat.name}{": "}</b>
                                    </span>
                                    <div className="statContainer">
                                        <div className="statBar">
                                            <span className="text-center">{base_stat}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <Link to='/'>
                            <h6 className='btn_margin d-block btn btn-sm btn-color'>Return</h6>
                        </Link>
                    </div>
                </div>
            </div>            
        )
    }

    return (
        <Redirect to="/" />
    )
}
export default About;

