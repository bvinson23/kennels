import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../../modules/CustomerManager";
import "./CustomerForm.css"

export const CustomerEditForm = () => {
    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { customerId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...customer };
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[evt.target.id] = selectedVal;
        setCustomer(stateToChange);
    };

    useEffect(() => {
        getCustomerById(customerId)
            .then(customer => {
                setCustomer(customer);
                setIsLoading(false);
            });
    }, [customerId]);

    const updateExistingCustomer = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedCustomer = {
            id: customerId,
            name: customer.name,
            address: customer.address,
            email: customer.email
        };

        updateCustomer(editedCustomer)
            .then(() => history.push("/customers")
            )
    }

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
                        value={customer.name}
                    />
                    <label htmlFor="name">Customer name</label>

                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="address"
                        value={customer.address}
                    />
                    <label htmlFor="address">address</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingCustomer}
                            className="btn btn-primary">
                            Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}