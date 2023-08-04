import { useExercises } from "../hooks/useExercises"
import { NavBar } from "../components/NavBar/NavBar"

export const SearchPage = () => {
    const { exercises, loading, error } = useExercises();

    if (loading) return <p>Cargando ejercicios</p>;
    if (error) return error.message;
    
    return (
        <>
        <NavBar />
        <section id="searchbar">
            <input type="text" placeholder="'Bajar de peso...'" />
            <button>Buscar</button>
            <select id="opciones" name="opciones">
                <option value="Todo">Todo</option>
                <option value="Ejercicios">Ejercicios</option>
                <option value="Entrenamientos">Entrenamientos</option>
            </select>
        </section>
        </>
    );
};