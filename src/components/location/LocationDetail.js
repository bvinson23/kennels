import React, { useState, useEffect } from "react";
import { getLocationById, deleteLocation, getAllLocations } from "../../modules/LocationManager";
import "./LocationDetail.css";
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        //invoke the delete function in LocationManager and re-direct to the location list.
        setIsLoading(true);
        deleteLocation(locationId).then(() => 
            history.push("/locations"))
    };

    useEffect(() => {
        //getLocationById(id) from LocationManager and hang on to the data; put it into state
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then(location => {
            setLocation({
                name: location.name,
                address: location.address
            });
            setIsLoading(false);
        });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Close Location
            </button>
        </section>
    );
}