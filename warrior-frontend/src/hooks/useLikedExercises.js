import { useEffect, useState } from "react";

const useLikedExercises = () => {
    const [likedExercises, setLikedExercises] = useState([]);

    useEffect(() => {
        const fetchLikedExercises = async () => {
            try {
                const response = await fetch(`http://localhost:3000/likes`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });

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
