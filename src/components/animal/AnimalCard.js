import React from "react";
import { getAnimalById } from "../../modules/AnimalManager"
import "./Animal.css"

//function to make an animal card
export const AnimalCard = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
    </section>
)