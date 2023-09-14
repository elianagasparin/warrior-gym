import { useWorkoutExercises } from '../../hooks/useWorkoutExercises';
import { ExerciseList } from '../Exercises/ExerciseList';

export const ExercisesInWorkouts = () => {
    const { exercises, loading, error } = useWorkoutExercises();

    if (loading) return <p>Cargando entrenamientos</p>;
    if (error) return error.message;

    return (
        <ExerciseList exercises={exercises} />
    );
};
