import React from "react"
import { Link } from "react-router-dom";
import "./Customer.css"

//function to make a customer card
export const Customer = ({ customer, handleDeleteCustomer }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">
                    {customer.name}
                    </span></h3>
                    <p>Address: {customer.address}</p>
                    <Link to={`/customers/${customer.id}`}>
                        <button type="button">
                            Details
                        </button>
                    </Link>
                    <Link to={`/customers/${customer.id}/edit`}>
                        <button type="button">
                            Edit
                        </button>
                    </Link>
            </div>
        </div>
    );
}