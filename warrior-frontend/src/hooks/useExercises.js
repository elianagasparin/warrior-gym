import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllExercisesService } from "../services/index";

export const useExercises = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadExercises = async () => {
            try {
                setLoading(true);

                const data = await getAllExercisesService(token);
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

    return { exercises, loading, error };
};
