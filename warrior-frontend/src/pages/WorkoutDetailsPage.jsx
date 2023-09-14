import { PageTitle } from '../components/PageTitle'
import { ExercisesInWorkouts } from '../components/Workouts/ExercisesInWorkouts'

export const WorkoutDetailsPage = () => {
    return (
        <>
            <PageTitle title={'Detalles de entrenamiento'}/>
            <ExercisesInWorkouts />
        </>
    )
}