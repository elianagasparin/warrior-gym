// Página en la que vemos todos los ejercicios disponibles

<<<<<<< HEAD
import './AllExercisesPage.css'
=======
import React from "react";
>>>>>>> ae55446 (cambios)
import { NavBar } from "../components/NavBar/NavBar";
import { useExercises } from "../hooks/useExercises";
import { NewExercise } from '../components/Exercises/NewExercise';
import { ExerciseList } from '../components/Exercises/ExerciseList';
import { Footer } from "../components/Footer"
import { NewExercise } from '../components/Actions/Exercises/NewExercise';

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