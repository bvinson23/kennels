import React, { useState, useEffect } from "react";
//import the components we will need
import { Customer } from "./Customer";
import { deleteCustomer, getAllCustomers, getCustomerById } from "../../modules/CustomerManager";
import { useHistory } from "react-router-dom";

export const CustomerList = () => {
    // The initial state is an empty array
    const [customers, setCustomers] = useState([]);
    const history = useHistory();

    const getCustomers = () => {
        // After the data comes back from the API, we
        // use the setCustomers function to update state
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    const handleDeleteCustomer = (id) => {
        deleteCustomer(id)
            .then(() => getAllCustomers().then(setCustomers));
    };

    // got the customers from the API on the component's first render
    useEffect(() => {
        getCustomers();
    }, []);

    // Finally we use map() to "loop over" the customers array to show a list of customer cards
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/customers/create") }}>
                    Add Customer
                </button>
            </section>
            <div className="container-cards">
                {customers.map(customer =>
                    <Customer
                        key={customer.id}
                        customer={customer}
                        handleDeleteCustomer={handleDeleteCustomer} />)}
            </div>
        </>
    );
};