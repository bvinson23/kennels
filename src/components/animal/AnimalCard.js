import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";

//function to make an animal card
export const AnimalCard = ({animal}) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    {/* <img src={require('./Luna.jpg')} alt="Luna the cat" /> */}
                </picture>
                <h3>Name: <span className="card-petname">
                    {animal.name}
                    </span></h3>
                    <p>Breed: {animal.breed}</p>
                    <Link to={`/animals/${animal.id}`}>
                        <button>Details</button>
                    </Link>
                    <Link to={`/animals/${animal.id}/edit`}>
                    <button type="button">
                        Edit
                    </button>
                    </Link>
            </div>
        </div>
    );
}