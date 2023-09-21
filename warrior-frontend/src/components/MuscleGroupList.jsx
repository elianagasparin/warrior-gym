export const MuscleGroupList = ({muscleGroups, onChange}) => {
    return (
        <select onChange={onChange}>
            {muscleGroups.map((muscleGroup) => (
                <option key={muscleGroup.id} value={muscleGroup.id}>{muscleGroup.name}</option>
            ))}
        </select>
    )
}