// Página en la que vemos todos los ejercicios disponibles

import { NavBar } from "../components/NavBar/NavBar";
import { useExercises } from "../hooks/useExercises";
import { NewExercise } from '../components/Exercises/NewExercise';
import { ExerciseList } from '../components/Exercises/ExerciseList';
import { Footer } from "../components/Footer"
import { PageTitle } from "../components/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AllExercisesPage = () => {
  const { exercises, loading, error, addExercises } = useExercises();

  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando ejercicios</p>;
  if (error) return error.message;

  return (
    <section>
      <NavBar />
      <PageTitle title={'Ejercicios'}/>
      { user && user.isAdmin === 1 && <NewExercise addExercises={addExercises}/>}
      <ExerciseList exercises={exercises}/>
      <Footer />
    </section>
  );
};