import React from 'react';
import PlantCard from './PlantCard';

const MatchContainer = props => {
    return (
        <div className="results-container">
           {props.plants.map(plant =>  <PlantCard delete={props.delete} key={plant.id} {...plant}/>)}
        </div>
    )
}

export default MatchContainer;