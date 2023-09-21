import { LikeButton } from '../Likes/LikeButton';
import './ExerciseList.css'

export const ExerciseList = ({exercises, onExerciseSelect}) => {
    return (
        <ul className='exercises'>
        {exercises.map(exercise => (
          <li className='card' details={exercise} key={exercise.id} onClick={() => onExerciseSelect(exercise)}>
            <img src={exercise.picture} alt={exercise.name} />
            <p className="exerciseName">{exercise.name}</p>
            <p className='description' >{exercise.description}</p>
            <LikeButton
                exerciseId={exercise.id}
                initialLiked={exercise.liked === 1}                                
                initialLikeCount={exercise.likeCount}
            />
          </li>
        ))}
      </ul>
    )
} 