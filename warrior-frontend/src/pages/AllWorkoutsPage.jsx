// Página en la que vemos todos los entrenamientos disponibles
import { NavBar } from "../components/NavBar/NavBar";
import { useWorkouts } from "../hooks/useWorkouts";
import { PageTitle } from '../components/PageTitle';
import { WorkoutsList } from "../components/Workouts/WorkoutsList";
import { NewWorkout } from "../components/Workouts/NewWorkout";
import { EditWorkout } from "../components/Workouts/EditWorkout";

export const AllWorkoutsPage = () => {
  const { workouts, loading, error } = useWorkouts();

  if (loading) return <p>Cargando entrenamientos</p>;
  if (error) return error.message;

  return (
    <section>
      <NavBar />
      <PageTitle className={"title"} title={'Entrenamientos'}/>
      <NewWorkout />
      <WorkoutsList workouts={workouts}/>
    </section>
      
      
  );
};