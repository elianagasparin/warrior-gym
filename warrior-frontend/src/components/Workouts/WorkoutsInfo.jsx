import { useWorkoutInfo } from "../../hooks/useWorkoutInfo"
import { PageTitle } from "../PageTitle";
import "./WorkoutsInfo.css"

export const WorkoutInfo = () => {
    const { workouts, loading, error } = useWorkoutInfo();

    if (loading) return <p>Cargando entrenamiento</p>;
    if (error) return error.message;

    return (
        <>
        <PageTitle className={'workoutName'} title={workouts.name} />
        <p className="workoutDescription">{workouts.description}</p>
        </>
    )
}