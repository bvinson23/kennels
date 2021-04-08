import React, { useState, useEffect } from "react";
import { getLocationById } from "../../modules/LocationManager";
import "./LocationForm.css";
import { useParams, useHistory } from "react-router-dom";

export const LocationEditForm = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { locationId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[evt.target.id] = selectedVal;
        setLocation(stateToChange);
    };

    const updateExistingLocation = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: locationId,
            name: location.name,
            address: location.address
        };

        updateLocation(editedLocation)
            .then( history.push("/locations")
            )
    }

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation(location);
                setIsLoading(false);
            });
    }, [locationId])

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={location.name}
                        />
                        <label htmlFor="name">Location name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="address"
                            value={location.address}
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingLocation}
                            className="btn btn-primary">
                                Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}