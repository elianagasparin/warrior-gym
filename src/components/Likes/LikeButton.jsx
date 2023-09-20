import React, { useState } from 'react';
import './LikesStyle.css';

export const LikeButton = ({ exerciseId, initialLiked, initialLikeCount }) => {
    const [liked, setLiked] = useState(initialLiked);
    const [likeCount, setLikeCount] = useState(initialLikeCount);

    const handleLikeDislike = async () => {
        try {
        const response = await fetch(`${import.meta.env.VITE_API_HOST}/likes/${exerciseId}`, {
            method: liked ? 'POST' : 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
            },
        });

        if (!response.ok) {
            throw new Error('No se pudo realizar la acción de like/dislike');
        }

        const data = await response.json();
        setLikeCount(data.likeCount.likes);
        setLiked(!liked);
        } catch (error) {
        console.error('Error handling like/dislike:', error)}
    };

    return (
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeDislike}>
        {liked ? <span>💚</span> : <span>🤍</span>}
        </button>
    );
};