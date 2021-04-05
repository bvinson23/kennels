import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";
import { AnimalDetail } from "./animal/AnimalDetail";

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
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            {/*
                This is a new route to handle a URL with the following pattern:
                http://localhost:3000/animals/1

                It will not handle the following URL because the `(\d+)`
                matches only numbers after the final slash in the URL
                http://localhost:3000/animals/jack
            */}
            
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