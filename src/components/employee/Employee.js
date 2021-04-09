import React from "react";
import "./Employee.css";
import { Link } from "react-router-dom";

//function to make an employee card
export const Employee = ({employee, handleDeleteEmployee}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-employeename">
                    {employee.name}
                    </span></h3>
                    <p>Location: {employee.location.name}</p>
                    <Link to={`/employees/${employee.id}/details`}>
                        <button type="button">
                            Details
                        </button>
                    </Link>
                    <Link to={`/employees/${employee.id}/edit`}>
                        <button type="button">
                            Edit
                        </button>
                    </Link>
                    <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
            </div>
        </div>
    );
}