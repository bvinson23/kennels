import React from "react"
import { useHistory } from "react-router-dom";
import "./Customer.css"

//function to make a customer card
export const Customer = ({ customer, handleDeleteCustomer }) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">
                    {customer.name}
                    </span></h3>
                    <p>Address: {customer.address}</p>
                    <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                    <button type="button" onClick={() => history.push(`/customers/${customer.id}/edit`)}>
                        Edit
                    </button>
            </div>
        </div>
    );
}