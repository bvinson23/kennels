import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addEmployee } from "../../modules/EmployeeManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./EmployeeForm.css"

export const EmployeeForm = () => {
    // State will contain both employee data as well as an isLoading flag.
    //Define the initial state of the form inputs with useState()

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);

    const history = useHistory();

    //Controlled component
    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    useEffect(() => {
        getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            });
    }, []);

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee(employee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Employee
          </button>
		</form>
	
    )
}