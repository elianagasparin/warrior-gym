// Página en la que vemos todos los ejercicios disponibles

import { NavBar } from "../components/NavBar/NavBar";
import { useExercises } from "../hooks/useExercises";
import { Footer } from "../components/Footer"

export const AllExercisesPage = () => {
  const { exercises, loading, error } = useExercises();

  if (loading) return <p>Cargando ejercicios</p>;
  if (error) return error.message;

  return (
    <div>
      <NavBar />
      <h1>Ejercicios</h1>
      <div>
        {exercises.map(exercise => (
          <div key={exercise.id}>
            <img src={exercise.picture} alt={exercise.name} />
            <p className="exerciseName">{exercise.name}</p>
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};