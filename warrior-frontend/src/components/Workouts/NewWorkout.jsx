import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext";
import { newWorkoutService } from "../../services";
import { useWorkouts } from "../../hooks/useWorkouts";
import "../Exercises/AddExercises.css"
import { GoalsList } from "../GoalsList";

export const NewWorkout = () => {
    const { addWorkouts } = useWorkouts();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [goalsId, setGoalsId] = useState(1);
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { token } = useContext(AuthContext);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setSending(true);
            
            const workout = await newWorkoutService({name, description, goalsId, token});

            addWorkouts({workout});

        } catch (error) {
            setError(error.message);
        } finally {
            setSending(false);
        }
        
    };

    return (
        <section className="newWorkoutForm">
            <button className="add" onClick={() => {
                setMenuOpen(!menuOpen)
            }}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Z"/></svg>
            </button>
            <form className="workoutForm" onSubmit={handleForm}>
                <ul className={menuOpen ? "open" : ""}>
                <h3 className="formTitle">Añade el nuevo entrenamiento</h3>
                    <li className="form-content">
                        <fieldset>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" name="name" id="name" placeholder="Introduce el nombre" onChange={(e) => setName(e.target.value)} />
                        </fieldset>
                    </li>
                    <li className="form-content">
                        <fieldset>
                            <label htmlFor="description">Descripción:</label>
                            <input type="text" name="description" id="description" placeholder="Introduce la descripción" onChange={(e) => setDescription(e.target.value)} />
                        </fieldset>
                    </li>
                    <li className="form-content">
                        <fieldset>
                            <label htmlFor="goal">Objetivo del ejercicio:</label>
                            <GoalsList onChange={(e) => setGoalsId(e.target.value)} />
                        </fieldset>
                    </li>
                    {sending ? <p>Añadiendo el entrenamiento</p> : null}
                    {error ? <p className="error">{error}</p> : null}
                    <button className="entrar">Añadir</button>
                </ul>
            </form>
        </section>
    )

}