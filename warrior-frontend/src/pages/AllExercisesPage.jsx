// Página en la que vemos todos los ejercicios disponibles

import './AllExercisesPage.css'
import { NavBar } from "../components/NavBar/NavBar";
import { useExercises } from "../hooks/useExercises";
import { Footer } from "../components/Footer"
import { LikeButton } from '../components/Actions/Likes/LikeButton';
import { NewExercise } from '../components/Actions/Exercises/NewExercise';

export const AllExercisesPage = () => {
  const { exercises, loading, error, addExercises } = useExercises();

  if (loading) return <p>Cargando ejercicios</p>;
  if (error) return error.message;

  return (
    <div>
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
    </div>
  );
};