import React, { useState } from 'react';

function WodForm( { submitWod } ) {
    const [formData, setFormData] = useState({
        workout: "",
        score: "",
        likes: 0,
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
            <h3>Score</h3>
            <input 
                id="score"
                type="text"
                placeholder="How will this be scored?"
                value={formData.score}
                onChange={handleChange}
            />
            <button id="submit-button" type="submit">Submit WOD</button>
        </form>
    )
};

export default WodForm;