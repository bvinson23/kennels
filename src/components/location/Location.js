import React from "react"
import "./Location.css"

//function to make an location card
export const Location = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">Address: {location.address}</div>
    </section>
)