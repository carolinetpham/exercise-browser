import React, { useState } from 'react';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [exercises, setExercises] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${input}`, {
            headers: {
                'X-Api-Key': 'ufNOt6v1uSHTQvE27j1YYg==9eftffBAEhwXsdCn'
            }
        });

        const data = await response.json();
        console.log(data);
        setExercises(data);
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)}></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div>
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <h3>Name: {exercise.name}</h3>
                        <h3>Type: {exercise.type}</h3>
                        <h3>Muscle: {exercise.muscle}</h3>
                        <h3>Equipment: {exercise.equipment}</h3>
                        <h3>Difficulty: {exercise.difficulty}</h3>
                        <p>Instructions: {exercise.instructions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}