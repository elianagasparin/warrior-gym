// Página en la que vemos todos los entrenamientos disponibles
import './AllWorkoutsPage.css'
import { NavBar } from "../components/NavBar/NavBar";
import { useWorkouts } from "../hooks/useWorkouts";
import { PageTitle } from '../components/PageTitle';
import { Link } from 'react-router-dom';
import WorkoutDelete from '../components/Workouts/DeleteWorkout'; 

export const AllWorkoutsPage = () => {
  const { workouts, loading, error } = useWorkouts();

  const handleDeleteWorkout = async (workoutId) => {
    try {
    } catch (error) {
      console.error('Error al eliminar el entrenamiento:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <PageTitle title={'Entrenamientos'}/>
      <div className='workouts'>
        {workouts.map(workout => (
          <div className='card' key={workout.id}>
            <Link to={`/workout/${workout.id}`}>
              <p className="workoutName">{workout.name}</p>
            </Link>
            <p>{workout.description}</p>
            <p>{workout.exerciseId}</p>
            <WorkoutDelete
              selectedWorkout={workout}
              onDelete={() => handleDeleteWorkout(workout.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};