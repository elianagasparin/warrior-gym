// Página en la que vemos todos los entrenamientos disponibles
import './AllWorkoutsPage.css'
import { NavBar } from "../components/NavBar/NavBar";
import { useWorkouts } from "../hooks/useWorkouts";

export const AllWorkoutsPage = () => {
  const { workouts, loading, error } = useWorkouts();

  if (loading) return <p>Cargando ejercicios</p>;
  if (error) return error.message;

  return (
    <div>
      <NavBar />
      <h1 className="tituloWorkout">Entrenamientos</h1>
      <div className='workouts'>
        {workouts.map(workout => (
          <div className='card' key={workout.id}>
            <p className="workoutName">{workout.name}</p>
            <p>{workout.description}</p>
            <p>{workout.exerciseId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};