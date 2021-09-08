import React from 'react';
import WodDescription from './WodDescription';

function Home( { wods } ) {
    const workouts = wods.map(wod => <WodDescription key={wod.id} wod={wod}/>)
        
    return(
        <div>
            {workouts}
        </div>
    )
};

export default Home;