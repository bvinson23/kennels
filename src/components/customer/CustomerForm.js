import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from '../../modules/CustomerManager';
import './CustomerForm.css'

export const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: "",
        address: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    //Controlled component
    const handleControlledInputChange = (event) => {
        const newCustomer = { ...customer }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
        event.preventDefault()

        addCustomer(customer)
            .then(() => history.push("/customers"))
    }

    return (
        <form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Customer address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Address" value={customer.address} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="email">Customer email:</label>
					<input type="text" id="email" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Email" value={customer.email} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
          </button>
		</form>
    )
}