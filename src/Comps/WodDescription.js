import React from 'react';
import { useHistory } from 'react-router-dom';

function WodDescription( { wod } ) {
    const history = useHistory();

    function handleClick() {
        history.push(`/wod/${wod.id}`)
    };

    return(
        <>
            <p>{wod.workout}</p>
            <h2>Score: {wod.score}</h2>
            <h3>Likes: {wod.likes}</h3>

            <button onClick={handleClick}>Add score and leave a like!</button>
        </>
    )
};

export default WodDescription;