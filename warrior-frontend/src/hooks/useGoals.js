import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getGoalsService } from "../services";

export const useGoals = () => {
    const [goals, setGoals] = useState([]);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadGoals = async () => {
            try {
                const data = await getGoalsService(token);
                console.log(data);

                setGoals(data);
            } catch (error) {
                setError(error.message);
            }
        };
        loadGoals();
    }, []);

    return { goals, error };
};
