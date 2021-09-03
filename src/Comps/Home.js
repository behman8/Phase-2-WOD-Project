import React from 'react';
import WodDescription from './WodDescription';

function Home( { wods } ) {
    const workouts = wods.map(wod => <WodDescription key={wod.id} wod={wod}/>)
        
    return(
        <div>
            <h1>Pick Your WOD</h1>
            {workouts}
        </div>
    )
};

export default Home;