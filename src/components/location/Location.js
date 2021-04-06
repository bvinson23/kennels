import React from "react";
import { Link } from "react-router-dom";
import "./Location.css"

//function to make an location card
export const Location = ({location}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-locationname">
                    {location.name}
                    </span></h3>
                    <p>Address: {location.address}</p>
                    <Link to={`/locations/${location.id}`}>
                        <button>Details</button>
                    </Link>
            </div>
        </div>
    );
}