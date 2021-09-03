import React, { useState } from 'react';

function WodForm( { submitWod } ) {
    const [formData, setFormData] = useState({
        workout: "",
        score: "",
        likes: 0,
    });

    function handleSubmit() {
        fetch("http://localhost:3000/wods", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => submitWod(...data, [formData]))
    };

    function handleChange(event) {
        setFormData({...formData, [event.target.id] : event.target.value,});
    };

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Your WOD!</h1>
            <textarea 
                id="workout" 
                type="text" 
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