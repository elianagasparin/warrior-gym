// Página en la que vemos todos los ejercicios disponibles

import './AllExercisesPage.css'
import { NavBar } from "../components/NavBar/NavBar";
import { useExercises } from "../hooks/useExercises";
import { NewExercise } from '../components/Exercises/NewExercise';
import { ExerciseList } from '../components/Exercises/ExerciseList';
import { Footer } from "../components/Footer"
import { PageTitle } from "../components/PageTitle";

export const AllExercisesPage = () => {
  const { exercises, loading, error, addExercises } = useExercises();

  if (loading) return <p>Cargando ejercicios</p>;
  if (error) return error.message;

  return (
    <section>
      <NavBar />
      <PageTitle title={'Ejercicios'}/>
      <NewExercise addExercises={addExercises}/>
      <ExerciseList exercises={exercises}/>
      <Footer />
    </section>
  );
};