const host = import.meta.env.VITE_API_HOST;

export const registerUserService = async ({ name, email, password }) => {
    const response = await fetch(`${host}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
};

export const loginService = async ({ email, password }) => {
    const response = await fetch(`${host}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.token;
};

export const userDataService = async (token) => {
    const response = await fetch(`${host}/user`, {
        headers: {
            Authorization: token,
        },
    });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.token;
};

export const getAllExercisesService = async (token) => {
    const response = await fetch(`${host}/exercises`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const newExerciseService = async ({
    name,
    description,
    picture,
    type,
    muscleGroupId,
    token,
}) => {
    const response = await fetch(`${host}/exercises`, {
        method: "POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
            picture,
            type,
            muscleGroupId,
        }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.exercises;
};

export const getMuscleGroupsService = async (token) => {
    const response = await fetch(`${host}/muscleGroups`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getAllWorkoutsService = async (token) => {
    const response = await fetch(`${host}/workouts`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const newWorkoutService = async ({
    name,
    description,
    goalsId,
    token,
}) => {
    const response = await fetch(`${host}/workouts`, {
        method: "POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, goalsId }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.message;
};

export const getGoalsService = async (token) => {
    const response = await fetch(`${host}/goals`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getWorkoutInfoService = async (token, id) => {
    const response = await fetch(`${host}/workouts/${id}`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const editWorkoutInfoService = async (
    name,
    description,
    goalsId,
    token,
    id
) => {
    const response = await fetch(`${host}/workouts/${id}`, {
        method: "PUT",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, goalsId }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const newExerciseInWorkoutService = async ({
    workoutId,
    exerciseId,
    token,
}) => {
    const response = await fetch(`${host}/workout/exercise`, {
        method: "POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ workoutId, exerciseId }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.message;
};

export const getWorkoutExercisesService = async (token, id) => {
    const response = await fetch(`${host}/workout/${id}`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getLikedExercisesService = async (token) => {
    const response = await fetch(`${host}/likes`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.exercises;
};
