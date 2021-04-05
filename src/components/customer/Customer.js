import React from "react"
import "./Customer.css"

//function to make a customer card
export const Customer = ({ customer }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">
                    {customer.name}
                    </span></h3>
                    <p>Breed: {customer.address}</p>
            </div>
        </div>
    );
}