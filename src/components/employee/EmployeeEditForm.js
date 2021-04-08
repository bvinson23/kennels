import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../modules/EmployeeManager";
import "./EmployeeForm.css";
import { getAllLocations } from "../../modules/LocationManager";

export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({name: "", location: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([]);

    const { employeeId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[evt.target.id] = selectedVal;
        setEmployee(stateToChange);
    };

    const updateExistingEmployee = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location")
        }

        const editedEmployee = {
            id: employeeId,
            name: employee.name,
            locationId: employee.locationId
        };

        updateEmployee(editedEmployee)
            .then(() => history.push("/employees")
            )
    }

    useEffect(() => {
        getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            });
    }, []);

    useEffect(() => {
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee(employee);
                setIsLoading(false);
            });
    }, [employeeId]);

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
                            value={employee.name}
                        />
                        <label htmlFor="name">Employee name</label>
                    </div>
                </fieldset>
                <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Assign to location: </label>
                            <select value={employee.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                                <option value="0">Select a location</option>
                                {locations.map(l => (
                                    <option key={l.id} value={l.id}>
                                        {l.name}
                                    </option>
                                ))}
                            </select>
                        </div>    
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEmployee}
                            className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}