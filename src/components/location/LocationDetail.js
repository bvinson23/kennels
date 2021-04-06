import React, { useState, useEffect } from "react";
import { getLocationById } from "../../modules/LocationManager";
import "./LocationDetail.css";
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({});

    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        //getLocationById(id) from LocationManager and hang on to the data; put it into state
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then(location => {
            setLocation({
                name: location.name,
                address: location.address
            });
        });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
        </section>
    );
}