import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getLikedExercisesService } from "../services/index";

export const useLikedExercises = () => {
    const [likedExercises, setLikedExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadLikedExercises = async () => {
            try {
                setLoading(true);

                const data = await getLikedExercisesService(token);
                console.log(data);

                setLikedExercises(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadLikedExercises();
    }, []);

    return { likedExercises, loading, error };
};
