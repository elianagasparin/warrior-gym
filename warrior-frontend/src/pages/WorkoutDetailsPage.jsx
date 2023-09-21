import { AddExercisesInWorkouts } from "../components/Exercises/AddExercisesInWorkouts";
import { useWorkoutInfo } from "../hooks/useWorkoutInfo";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { PageTitle } from '../components/PageTitle';
import { ExercisesInWorkouts } from '../components/Workouts/ExercisesInWorkouts';
import { EditWorkout } from "../components/Workouts/EditWorkout";

export const WorkoutDetailsPage = () => {
    const { workouts, loading, error } = useWorkoutInfo();

    if (loading) return <p>Cargando entrenamiento</p>;
    if (error) return error.message;

    return (
        <>
           <NavBar />
            <PageTitle className={'workoutName'} title={workouts.name} />
            <p className="workoutDescription">{workouts.description}</p>
            <AddExercisesInWorkouts />
            <EditWorkout workout={workouts}/>
            <ExercisesInWorkouts />
            <Footer /> 
        </>
    );
};