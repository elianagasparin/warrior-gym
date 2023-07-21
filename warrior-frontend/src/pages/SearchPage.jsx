import useExercises from "../hooks/useExercises";

export const SearchPage = () => {
    const { exercises, loading, error } = useExercises();

    if (loading) return <p>Cargando los ejercicios...</p>

    return (
        <section id="searchbar">
            <input type="text" placeholder="'Bajar de peso...'"/>
            <button>Buscar</button>
        </section>
    )
}