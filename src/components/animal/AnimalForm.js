import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addAnimal } from "../../modules/AnimalManager";
import "./AnimalForm.css";
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import { getAllEmployees } from "../../modules/EmployeeManager";

export const AnimalForm = () => {
    // State will contain both animal data as well as an isLoading flag.
    // Define the initial state of the form inputs iwth useState()

    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);

    const history = useHistory();

    //when a field changes, update state. The return will re-render and display based on the values in state
    //NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot of questions about it.
    //Controlled component

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always creat a copy, make changes, and then set state.*/
        const newAnimal = { ...animal }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newAnimal[event.target.id] = selectedVal
        // update state
        setAnimal(newAnimal)
    }

    //These will run in the order you write them
    useEffect(() => {
        //load location data and setState
        getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            });
    }, []);

    useEffect(() => {
        //load customer data and setState
        getAllCustomers()
            .then(customersFromAPI => {
                setCustomers(customersFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    }, []);

    const handleClickSaveAnimal = (event) => {
        event.preventDefault() //Prevents browser from submitting the form
        setIsLoading(true);

        const locationId = animal.locationId
        const customerId = animal.customerId
        const employeeId = animal.employeeId

        if (locationId === 0 || customerId === 0 || employeeId === 0) {
            window.alert("Please select a location, a customer, and an employee")
        } else {
            //invoke addAnimal passing animal as an argument.
            //once complete, change the url and display the animal list
            addAnimal(animal)
                .then(() => history.push("/animals"))
        }
    }

    return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Animal</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Animal name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Animal breed:</label>
					<input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeId">Employee: </label>
					<select value={animal.employeeId} name="employee" id="employeeId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an employee</option>
						{employees.map(e => (
							<option key={e.id} value={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveAnimal}>
				Save Animal
          </button>
		</form>
	)
}