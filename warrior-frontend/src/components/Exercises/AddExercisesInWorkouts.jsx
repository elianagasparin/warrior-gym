import { useContext, useState } from "react";
import { useWorkoutExercises } from "../../hooks/useWorkoutExercises"
import { newExerciseInWorkoutService } from "../../services";
import { AuthContext } from "../../context/AuthContext";
import { useExercises } from "../../hooks/useExercises";
import { useParams } from "react-router-dom";
import "./AddExercises.css"

export const AddExercisesInWorkouts = () => {
    const { exercises } = useExercises();
    const { addExercises } = useWorkoutExercises();
    const [workoutId, setWorkoutId] = useState(1);
    const [exerciseId, setExerciseId] = useState(0);
    const [error, setError] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const { id } = useParams();
    const { token } = useContext(AuthContext);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const exercise = await newExerciseInWorkoutService({workoutId, exerciseId, token, id});

            addExercises(exercise);
            
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section className="addExerciseForm">
            <button className="add" onClick={() => {
                setMenuOpen(!menuOpen)
            }}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Z"/></svg>
            </button>
            <form className="exerciseForm" onSubmit={handleForm}>
                <div className={menuOpen ? "open" : ""}>
                    <h3 className="formTitle">Añadir ejercicio</h3>
                    <select onChange={(e) => setExerciseId(e.target.value)}>
                        {exercises.map(exercise => (
                        <option className="form-content" key={exercise.id} value={exercise.id}>{exercise.name}</option>
                        ))}
                    </select>
                    {error ? <p className="error">{error}</p> : null}
                    <button className="entrar">Añadir</button>
                </div>
            </form>
        </section>
        
        
    )
}