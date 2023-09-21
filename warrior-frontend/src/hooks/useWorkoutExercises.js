import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getWorkoutExercisesService } from "../services/index";
import { deleteWorkoutService } from "../services/index";

export const useWorkoutExercises = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadExercises = async () => {
            try {
                setLoading(true);

                const data = await getWorkoutExercisesService(token);
                console.log(data);

                setExercises(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        loadExercises();
    }, []);

    const addExercises = (exercise) => {
        setExercises([exercise, ...exercises]);
    };

    return { exercises, loading, error, addExercises };
};

export const useDeleteWorkout = () => {
    const { token } = useContext(AuthContext);

    const deleteWorkout = async (workoutId) => {
        try {
            await deleteWorkoutService(workoutId, token);

        } catch (error) {
            console.error("Error al eliminar el entrenamiento:", error);
        }
    };

    return { deleteWorkout };
};