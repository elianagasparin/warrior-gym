import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getWorkoutInfoService } from "../services/index";

export const useWorkoutInfo = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);
    const { id } = useParams();

    useEffect(() => {
        const loadWorkouts = async () => {
            try {
                setLoading(true);

                const data = await getWorkoutInfoService(token, id);
                console.log(data);

                setWorkouts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        loadWorkouts();
    }, []);

    return { workouts, loading, error };
};
