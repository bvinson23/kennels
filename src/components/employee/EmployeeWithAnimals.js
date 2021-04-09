import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeManager from "../../modules/EmployeeManager";
import { AnimalCard } from "../animal/AnimalCard";

export const EmployeeWithAnimals = () => {
    const [employee, setEmployee] = useState({});
    const [animals, setAnimals] = useState({});

    const {employeeId} = useParams();

    useEffect(() => {
        EmployeeManager.getWithAnimals(employeeId)
            .then(APIresult => {
                setEmployee(APIresult);
                setAnimals(APIresult.animals);
            });
    }, []);

    return (
        <div className="card">
            <p>Employee: {employee.name}</p>
            {animals.map(animal =>
                <AnimalCard 
                    key={animal.id}
                    animal={animal}
                />
            )}
        </div>
    );
};