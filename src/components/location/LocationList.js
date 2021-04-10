import React, { useState, useEffect } from "react";
//import the components we will need
import { Location } from "./Location";
import { GenericCard } from "../GenericCard"
import { deleteLocation, getAllLocations, getLocationById } from "../../modules/LocationManager";
import { useHistory } from "react-router-dom";

export const LocationList = () => {
    // The initial state is an empty array
    const [locations, setLocations] = useState([]);
    const history = useHistory();

    const getLocations = () => {
        // After the data comes back from the API, we
        // use the setAnimals function to update state
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(() => getAllLocations().then(setLocations));
    };

    // got the locations from the API on the component's first render
    useEffect(() => {
        getLocations();
    }, []);

    // Finally we use map() to "loop over" the locations array to show a list of location cards
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/locations/create") }}>
                    Open Location
                </button>
            </section>
            <div className="container-cards">
                {locations.map(location =>
                    <GenericCard
                        key={location.id}
                        location={location}
                        name={location.name}
                        addlInfo={location.address}
                        resource="locations"
                        handleDeleteLocation={handleDeleteLocation} />)}
            </div>
        </>
    )
}