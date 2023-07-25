import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllWorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET para obtener los entrenamientos desde la base de datos
    axios.get('http://localhost:3000')
      .then(response => {
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los entrenamientos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Listado de Entrenamientos</h1>
      <div>
        {workouts.map(workout => (
          <div key={workout.id}>
            <h2>{workout.name}</h2>
            <p>Categoría: {workout.category}</p>
            <h3>Ejercicios:</h3>
            <ul>
              {workout.exercises.map(exercise => (
                <li key={exercise.id}>{exercise.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWorkoutsPage;
