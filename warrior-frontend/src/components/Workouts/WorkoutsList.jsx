import { Link } from "react-router-dom"
import "./WorkoutList.css"

export const WorkoutsList = ({workouts}) => {
    return (
        <ul className='workouts'>
            {workouts.map(workout => (
                <Link to={`/workout/${workout.id}`} key={workout.id}>
                    <li className='card' key={workout.id}>
                        <p className="workoutTitle">{workout.name}</p>
                        <p>{workout.description}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}