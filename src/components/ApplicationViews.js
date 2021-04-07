import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { CustomerList } from "./customer/CustomerList";
import { CustomerForm } from "./customer/CustomerForm";
import { LocationList } from "./location/LocationList";
import { LocationDetail } from "./location/LocationDetail";
import { LocationForm } from "./location/LocationForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";

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

            <Route path="/animals/create">
                <AnimalForm />
            </Route>
            
            {/* Render the location list when http://localhost:3000/locations */}
            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>
            
            {/* Render the customer list when http://localhost:3000/customers */}
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}