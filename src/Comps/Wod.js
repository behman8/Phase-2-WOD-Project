import React from 'react';
import { useParams, Redirect } from 'react-router-dom'

function Wod( { wods } ) {
    const params = useParams();
    const foundWorkout = wods.find(wod => wod.id === parseInt(params.id))

    if (foundWorkout) {
        return(
            <>
                <p>{foundWorkout.workout}</p>
                <h3>{foundWorkout.score}</h3>
                <h2>Likes: {foundWorkout.likes}</h2>
                <button>👍</button>
            </>
        )
    } else {
        return <Redirect to='/'/> 
    }
};

export default Wod;