// Página en la que vemos todos los entrenamientos disponibles

import { NavBar } from "../components/NavBar";
import { useWorkouts } from "../hooks/useWorkouts";

export const AllWorkoutsPage = () => {
  const { workouts } = useWorkouts();

  return (
    <div>
      <NavBar />
      <h1>Entrenamientos</h1>
      <div>
        {workouts.map(workout => (
          <div key={workout.id}>
            <img src={workout.picture} alt={workout.name} />
            <p className="exerciseName">{workout.name}</p>
            <p>{workout.description}</p>
            <p>{workout.goalsId}</p>
            <p>{workout.exerciseId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};