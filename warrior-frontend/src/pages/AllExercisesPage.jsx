import React, { useContext, useState } from 'react';
import { NavBar } from "../components/NavBar/NavBar";
import { useExercises } from "../hooks/useExercises";
import { NewExercise } from '../components/Exercises/NewExercise';
import { ExerciseList } from '../components/Exercises/ExerciseList';
import { Footer } from "../components/Footer"
import { PageTitle } from "../components/PageTitle";
import ExerciseDelete from '../components/Exercises/ExerciseDelete';
import { deleteExerciseService } from '../services/index';
import { AuthContext } from '../context/AuthContext';

export const AllExercisesPage = () => {
  const { exercises, loading, error, addExercises, deleteExercises } = useExercises();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

const {token} = useContext(AuthContext);

  const handleDeleteExercise = async (exerciseId) => {
    try {
      await deleteExerciseService(exerciseId, token);
  
      deleteExercises(exerciseId);
      setSelectedExercise(null);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error al eliminar el ejercicio:', error);

    }
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    setIsDeleteModalOpen(true);
  };

  if (loading) return <p>Cargando ejercicios</p>;
  if (error) return error.message;

  return (
    <section>
      <NavBar />
      <PageTitle className={"title"} title={'Ejercicios'}/>
      <NewExercise addExercises={addExercises}/>
      <ExerciseList exercises={exercises} onExerciseSelect={handleExerciseSelect}/>
      <ExerciseDelete
        onDelete={handleDeleteExercise}
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
      />
      <Footer />
    </section>
  );
};
