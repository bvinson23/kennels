const remoteURL = "http://localhost:8088"

export const getEmployeeById = (id) => {
    return fetch(`${remoteURL}/employees/${id}`)
    .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(result => result.json())
}