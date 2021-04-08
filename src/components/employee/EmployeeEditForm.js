import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../modules/EmployeeManager";
import "./EmployeeForm.css";
import { getAllLocations } from "../../modules/LocationManager";

export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({name: "", location: ""});
    const [isLoading, setIsLoading] = useState(false);

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

        const editedEmployee = {
            id: employeeId,
            name: employee.name,
            location: employee.location
        };

        updateEmployee(editedEmployee)
            .then(() => history.push("/employees")
            )
    }

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

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={employee.location}
                        />
                        <label htmlFor="location">location</label>
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