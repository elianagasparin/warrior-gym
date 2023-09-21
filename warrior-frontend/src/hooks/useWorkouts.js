import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllWorkoutsService } from "../services/index";

export const useWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadWorkouts = async () => {
            try {
                setLoading(true);

                const data = await getAllWorkoutsService(token);
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

    const addWorkouts = (workout) => {
        setWorkouts([workout, ...workouts]);
    };

    return { workouts, loading, error, addWorkouts };
};
