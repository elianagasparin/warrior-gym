import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { useExercises } from "../hooks/useExercises"
import { ContentBox } from "../components/ContentBox";

export const SearchPage = () => {
    const { exercises, loading, error } = useExercises();

    if (loading) return <p>Cargando ejercicios</p>;
    if (error) return error.message;

    const onSearch = (searchTerm) => {
        console.log(searchTerm);
    }
    
    return (
        <>
        <Logo />
        <section id="searchbar">
            <input type="text" value={exercises} placeholder="'Bajar de peso...'" onChange={handleChange} />
            <button onClick={() => onSearch(exercises)}>Buscar</button>
            <select id="opciones" name="opciones">
                <option value="Todo">Todo</option>
                <option value="Ejercicios">Ejercicios</option>
                <option value="Entrenamientos">Entrenamientos</option>
            </select>
        </section>
        <section>
            <ContentBox exercise={exercises} />
        </section>
        </>
    );
};