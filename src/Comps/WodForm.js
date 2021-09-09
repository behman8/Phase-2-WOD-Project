import React, { useState } from 'react';

function WodForm( { submitWod } ) {
    const [formData, setFormData] = useState({
        workout: "",
        scoring: "",
        altMovements: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        submitWod(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Your WOD!</h1>
            <h2>Workout:</h2>
            <textarea 
                id="workout"
                placeholder="Enter workout here..."
                value={formData.workout}
                onChange={event => setFormData({...formData, workout: event.target.value})}
            />
            <br/>
            <h2>Scoring:</h2>
            <input 
                id="scoring"
                type="text"
                placeholder="How will this be scored?"
                value={formData.scoring}
                onChange={event => setFormData({...formData, scoring: event.target.value})}
            />
            <br/>
            <h2>Alternative Movements:</h2>
            <textarea 
                id="altMovements"
                placeholder="Alternate movements..."
                value={formData.altMovements} 
                onChange={event => setFormData({...formData, altMovements: event.target.value})}
            />
            <br/>
            <button id="submit-button" type="submit">Submit WOD</button>
        </form>
    )
};

export default WodForm;