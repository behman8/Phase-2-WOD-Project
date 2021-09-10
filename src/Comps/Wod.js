import React from 'react';
import { useParams, Redirect } from 'react-router-dom'

function Wod( { wods } ) {
    const params = useParams();
    const foundWorkout = wods.find(wod => wod.id === parseInt(params.id));

    if (foundWorkout) {
        return(
            <div className="wod">
                <h2>Alternative Movements</h2>
                <p>{foundWorkout.altMovements}</p>
                <h2>Workout:</h2>
                <p>{foundWorkout.workout}</p>
                <h2>Scoring:</h2>
                <h3>{foundWorkout.scoring}</h3>
            </div>
        )
    } else {
        return <Redirect to='/'/> 
    }
};

export default Wod;