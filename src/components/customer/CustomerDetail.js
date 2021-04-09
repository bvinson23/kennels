import React, { useState, useEffect } from 'react';
import { deleteCustomer, getCustomerById } from "../../modules/CustomerManager";
import "./CustomerDetail.css";
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {customerId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        //invoke the delete function in AnimalManager and re-direct to the animal list.
        setIsLoading(true);
        deleteCustomer(customerId).then(() => 
            history.push("/customers")
        );
    };

    useEffect(() => {
        //getCustomerById(id) from CustomerManager and hang on to the data; put it into state
        console.log("useEffect", customerId)
        getCustomerById(customerId)
        .then(customer => {
            setCustomer({
                name: customer.name,
                address: customer.address,
                email: customer.email
            });
            setIsLoading(false);
        });
    }, [customerId]);
    
    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__breed">{customer.address}</div>
            <div className="customer__owner">Email: {customer.email}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete
            </button>
        </section>
    );
}