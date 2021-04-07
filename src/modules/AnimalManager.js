const remoteURL = "http://localhost:8088"

export const getAnimalById = (id) => {
    return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer&_expand=employee`)
    .then(res => res.json())
}

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals?_expand=customer&_expand=location&_expand=employee`)
    .then(result => result.json())
}

//function to delete an animal
export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

//function to add an animal
export const addAnimal = (newAnimal) => {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(response => response.json())
}