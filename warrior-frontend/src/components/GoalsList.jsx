import { useGoals } from "../hooks/useGoals"

export const GoalsList = ({onChange}) => {
    const { goals } = useGoals();

    return (
        <select onChange={onChange}>
            {goals.map(goal => (
                <option key={goal.id} value={goal.id}>{goal.name}</option>
            ))}
        </select>
    )
}