import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext'; 
import { deleteWorkoutService } from '../../services/index';

const WorkoutDelete = ({
    selectedWorkout,
    onDelete,
}) => {
    const { token } = useContext(AuthContext);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteWorkoutService(selectedWorkout.id, token);
            onDelete(selectedWorkout.id);
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.error('Error al eliminar el entrenamiento:', error);
        }
    };

    return (
        <div>
            <button onClick={() => setIsDeleteModalOpen(true)}>Eliminar</button>
            {isDeleteModalOpen && (
                <div className="delete-modal">
                    <p>Entrenamiento seleccionado: {selectedWorkout?.name}</p>
                    <button onClick={handleDelete}>Confirmar Eliminación</button>
                    <button onClick={() => setIsDeleteModalOpen(false)}>Cancelar</button>
                </div>
            )}
        </div>
    );
};

export default WorkoutDelete;