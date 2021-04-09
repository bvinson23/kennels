import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { CustomerList } from "./customer/CustomerList";
import { CustomerForm } from "./customer/CustomerForm";
import { CustomerEditForm } from "./customer/CustomerEditForm";
import { CustomerDetail } from "./customer/CustomerDetail";
import { LocationList } from "./location/LocationList";
import { LocationDetail } from "./location/LocationDetail";
import { LocationForm } from "./location/LocationForm";
import { LocationEditForm } from "./location/LocationEditForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeEditForm } from "./employee/EmployeeEditForm";
import { EmployeeWithAnimals } from "./employee/EmployeeWithAnimals"
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
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
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
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

            <Route exact path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)/edit">
                <LocationEditForm />
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

            <Route exact path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route path="/customers/:customerId(\d+)/edit">
                <CustomerEditForm />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)/details">
                <EmployeeWithAnimals />
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
                <EmployeeEditForm />
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>
        </>
    )
}