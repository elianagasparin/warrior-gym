// Página en la que vemos todos los ejercicios disponibles

import React, { useState } from "react";
import axios from 'axios';

const AllExercisesPage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Obtenemos los ejercicios de nuestra base de datos
    axios.get('http://localhost:3000')
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los ejercicios:', error);
      });
  }, []);

  return (
    <div>
      <h1>Listado de Ejercicios</h1>
      <div>
        {exercises.map(exercise => (
          <div key={exercise.id}>
            <img src={exercise.picture} alt={exercise.name} />
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllExercisesPage;
