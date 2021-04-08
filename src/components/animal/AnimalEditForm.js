import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAnimalById, updateAnimal } from "../../modules/AnimalManager";
import "./AnimalForm.css"
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import { getAllEmployees } from "../../modules/EmployeeManager";

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);

    const { animalId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[evt.target.id] = selectedVal;
        setAnimal(stateToChange);
    };

    useEffect(() => {
        getAllLocations()
            .then(LocationsFromAPI => {
                setLocations(LocationsFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllCustomers()
            .then(customersFromAPI => {
                setCustomers(customersFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllEmployees()
            .then(employessFromAPI => {
                setEmployees(employessFromAPI)
            });
    }, []);

    useEffect(() => {
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            });
    }, []);

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const locationId = animal.locationId
        const customerId = animal.customerId
        const employeeId = animal.employeeId

        if (locationId === 0 || customerId === 0 || employeeId === 0) {
            window.alert("Please select a location, a customer, and an employee")
        } else {

            //This is an edit, so we need the id
            const editedAnimal = {
                id: animalId,
                name: animal.name,
                breed: animal.breed,
                locationId: animal.locationId,
                customerId: animal.customerId,
                employeeId: animal.employeeId
            };

            updateAnimal(editedAnimal)
                .then(() => history.push("/animals")
                )
        }

    }



    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={animal.name}
                        />
                        <label htmlFor="name">Animal name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={animal.breed}
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign to location: </label>
                        <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a location</option>
                            {locations.map(l => (
                                <option key={l.id} value={l.id}>
                                    {l.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerId">Customer: </label>
                        <select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a customer</option>
                            {customers.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employeeId">Employee: </label>
                        <select value={animal.employeeId} name="employee" id="employeeId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select an employee</option>
                            {employees.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingAnimal}
                            className="btn btn-primary">
                            Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}