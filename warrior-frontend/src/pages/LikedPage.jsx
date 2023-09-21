import { LikedExercises } from '../components/Likes/LikedExercises';
import '../components/Exercises/ExerciseList.css';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer';

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

