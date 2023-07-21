const host = import.meta.env.VITE_API_HOST;

export const registerUserService = async ({name, email, password}) => {
    const response = await fetch(`${host}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify({name, email, password}),
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }
};

export const getAllExercisesService = async () => {
    const response = await fetch(`${host}`);

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
}