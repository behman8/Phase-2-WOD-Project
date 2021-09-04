import React, { useState } from 'react';

function WodForm( { submitWod } ) {
    const [formData, setFormData] = useState({
        workout: "",
        scoring: "",
        likes: 0,
        score: 0,
    });

    function handleChange(event) {
        setFormData({...formData, [event.target.id] : event.target.value,});
    };

    function handleSubmit(event) {
        event.preventDefault();
        submitWod(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Your WOD!</h1>
            <textarea 
                id="workout"
                placeholder="Enter workout here..."
                value={formData.workout}
                onChange={handleChange}
            />
            <br/>
            <h3>Scoring</h3>
            <input 
                id="scoring"
                type="text"
                placeholder="How will this be scored?"
                value={formData.scoring}
                onChange={handleChange}
            />
            <button id="submit-button" type="submit">Submit WOD</button>
        </form>
    )
};

export default WodForm;