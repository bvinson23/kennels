import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";

export const ApplicationViews = () => {
    return (
        <>
            {/*Render the location list when http://localhost:3000/ */}
            {/*You must use exact or it will display anything that 
                                                starts with that path*/}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalList />
            </Route>
            
            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationList />
            </Route>
            
            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerList />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeeList />
            </Route>
        </>
    )
}