import { LikedExercises } from '../components/Likes/LikedExercises';
import '../components/Likes/LikesStyle.css';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer';
import { PageTitle } from '../components/PageTitle';

export const LikedPage = () => {
    return (
        <div className="page">
            <NavBar />
            <PageTitle className={"likesTitle"} title={"Likes"}/>
            <div className="content">
                <LikedExercises />
            </div>
            <Footer />
        </div>
    );
};

