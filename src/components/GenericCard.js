import React from "react";
import { Link } from "react-router-dom";
import "./location/Location.css"

export const GenericCard = ({ id, name, resource, addlInfo }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-locationname">
                    {name}
                </h3>
                <p className="card-text">{addlInfo ? addlInfo : ""}</p>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/${resource}/${id}`,
                            state: {
                                id: id,
                                name: name,
                                resource: resource,
                                addlInfo: addlInfo
                            }
                        }}>
                            Details
                        </Link>
                }
            </div>
        </div>
    )
}