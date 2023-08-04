import React from 'react';
import LikeButton from '../Likes/LikeButton';
import useLikedExercises from '../../hooks/useLikedExercises';
import '../Likes/LikesStyle.css';

const LikedExercises = () => {
    const likedExercises = useLikedExercises();

    return (
        <div className="container">
        <div>
            <div className="exercises-container">
            {likedExercises.map((exercise) => (
                <div className="exercise" key={exercise.id}>
                    <LikeButton
                        exerciseId={exercise.id}
                        initialLiked={exercise.liked === 1}
                        initialLikeCount={exercise.likeCount}
                    />
                    <p>{exercise.name}</p>
                <img src={exercise.picture} alt={exercise.name} />

                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default LikedExercises;
