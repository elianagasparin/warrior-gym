import { useState, useContext, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { AuthContext } from "../context/AuthContext";
import { getAllExercisesService } from "../services";
import { PageTitle } from "../components/PageTitle"
import { ExerciseList } from "../components/Exercises/ExerciseList";
import "./SearchPage.css";

export const SearchPage = () => {
    
    const [exercises, setExercises] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadExercises = async () => {
            try {
                setLoading(true);
                const data = await getAllExercisesService(token);
                setExercises(data);
                setResults(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        loadExercises();
    }, []);

    const filter = (searchTerm) => {
        let searchResult = results.filter((exercise) => {
            if (exercise.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
            || exercise.type.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return exercise;
            }
        });
        setExercises(searchResult);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log("Busqueda: " + e.target.value);
        filter(e.target.value);
    }

    if (loading) return <p>Cargando ejercicios</p>;
    if (error) return error.message;

    return (
        <>
        <NavBar />
        <section className="searchbar">
            <input 
                type="text" 
                placeholder="'Bajar de peso...'" 
                value={search} 
                onChange={handleChange}/>
        </section>
        <PageTitle title={'Ejercicios'}/>
        <ExerciseList exercises={exercises}/>
        </>
    );
};