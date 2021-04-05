const remoteURL = "http://localhost:8088"

export const getCustomerById = (id) => {
    return fetch(`${remoteURL}/customers/${id}`)
    .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(result => result.json())
}

export const deleteCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`, {
        method: "DELETE"
    }).then( result => result.json())
}