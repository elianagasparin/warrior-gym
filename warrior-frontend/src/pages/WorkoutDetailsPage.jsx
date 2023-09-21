import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { PageTitle } from '../components/PageTitle'
import { ExercisesInWorkouts } from '../components/Workouts/ExercisesInWorkouts'
import { WorkoutInfo } from "../components/Workouts/WorkoutsInfo";

export const WorkoutDetailsPage = () => {
    return (
        <>  <NavBar />
            <WorkoutInfo />
            <ExercisesInWorkouts />
            <Footer />
        </>
    )
}