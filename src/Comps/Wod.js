import React from 'react';
import { useParams, Redirect } from 'react-router-dom'

function Wod( { wods } ) {
    const params = useParams();
    const foundWorkout = wods.find(wod => wod.id === parseInt(params.id))

    if (foundWorkout) {
        return(
            <>
                <p>{foundWorkout.workout}</p>
                <h3>{foundWorkout.scoring}</h3>
                <h2>Score: {foundWorkout.score}</h2>
                    <input type="number"></input>
                    <button>Add Score</button>
                <h3>Likes: {foundWorkout.likes}</h3>
                    <button>👍</button>
            </>
        )
    } else {
        return <Redirect to='/'/> 
    }
};

export default Wod;