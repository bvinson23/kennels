import React from "react"
import "./Employee.css"

//function to make an employee card
export const Employee = ({employee, handleDeleteEmployee}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-employeename">
                    {employee.name}
                    </span></h3>
                    <p>Location: {employee.location}</p>
                    <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
            </div>
        </div>
    );
}