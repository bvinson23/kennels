const remoteURL = "http://localhost:8088"

export const getLocationById = (id) => {
    return fetch(`${remoteURL}/locations/${id}`)
    .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(result => result.json())
}

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
} 