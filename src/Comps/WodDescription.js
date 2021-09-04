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
            <h3>{wod.score}</h3>
            <h2>Likes: {wod.likes}</h2>

            <button onClick={handleClick}>Add score and leave a like!</button>
        </>
    )
};

export default WodDescription;