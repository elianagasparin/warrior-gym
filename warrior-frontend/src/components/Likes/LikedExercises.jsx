import { useLikedExercises } from '../../hooks/useLikedExercises';
import { ExerciseList } from '../Exercises/ExerciseList';

export const LikedExercises = () => {
    const { likedExercises, loading, error } = useLikedExercises();

    if (loading) return <p>Cargando ejercicios</p>;
    if (error) return error.message;

    return (
        <ExerciseList exercises={likedExercises} />
    );
};
