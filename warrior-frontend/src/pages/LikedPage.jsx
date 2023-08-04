import React from 'react';
import LikedExercises from '../components/Likes/LikedExercises';
import { Footer } from '../components/Footer';
import '../components/Likes/LikesStyle.css';
import { NavBar } from '../components/NavBar/NavBar';

export const LikedPage = () => {
    return (
        <div className="page">
            <NavBar />
            <div className="content">
                <LikedExercises />
            </div>
            <Footer />
        </div>
    );
};

