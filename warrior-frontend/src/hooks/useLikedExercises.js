import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const useLikedExercises = () => {
    const [likedExercises, setLikedExercises] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchLikedExercises = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_HOST}/likes`,
                    {
                        headers: {
                            Authorization: localStorage.getItem("token"),
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        'No se pudieron obtener los ejercicios con "me gusta"'
                    );
                }

                const data = await response.json();
                setLikedExercises(data.Exercises);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLikedExercises();
    }, []);

    return likedExercises;
};

export default useLikedExercises;
