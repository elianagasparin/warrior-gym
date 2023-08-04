const host = import.meta.env.VITE_API_HOST;

export const registerUserService = async ({ name, email, password }) => {
    const response = await fetch(`${host}/user`, {
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
    const response = await fetch(`${host}/login`, {
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

export const getAllWorkoutsService = async (token) => {
    const response = await fetch(`${host}/workouts`, {
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
