import React from "react"
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
                    <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
            </div>
        </div>
    );
}