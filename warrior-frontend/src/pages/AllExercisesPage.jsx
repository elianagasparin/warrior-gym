// Página en la que vemos todos los ejercicios disponibles

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
      <h1 className="titulo">Ejercicios</h1>
      <NewExercise key={exercises.id} addExercises={addExercises}/>
      <div className='exercises'>
        {exercises.map(exercise => (
          <div className='card' details={exercise} key={exercise.id}>
            <img src={exercise.picture} alt={exercise.name} />
            <p className="exerciseName">{exercise.name}</p>
            <p className='description' >{exercise.description}</p>
            <LikeButton
                exerciseId={exercise.id}
                initialLiked={exercise.liked === 1}                                
                initialLikeCount={exercise.likeCount}
            />
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};