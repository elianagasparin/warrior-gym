import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getMuscleGroupsService } from "../services";

export const useMuscleGroups = () => {
    const [muscleGroups, setMusleGroups] = useState([]);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadMuscleGroups = async () => {
            try {
                const data = await getMuscleGroupsService(token);
                console.log(data);

                setMusleGroups(data);
            } catch (error) {
                setError(error.message);
            }
        };
        loadMuscleGroups();
    }, []);

    return { muscleGroups, error };
};
