import React from 'react';
import { useHistory } from 'react-router-dom';

function WodDescription( { wod } ) {
    const history = useHistory();

    function handleClick() {
        history.push(`/wod/${wod.id}`)
    };

    return(
        <div className="WodDescription">
            <h2>Workout:</h2>
            <p>{wod.workout}</p>
            <h2>Scoring:</h2>
            <p>{wod.scoring}</p>

            <button className="add-score" onClick={handleClick}>Alternative Movements</button>
        </div>
    )
};

export default WodDescription;