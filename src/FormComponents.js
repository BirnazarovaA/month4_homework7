import React from 'react';
import {useState} from "react";

const FormComponents = () => {
    const [name, setName] = useState([]);
    const fetchDataName = async (e) => {
        await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => setName(data));
    }

    return (
        <div>
            <input type="text" placeholder='dog name' onChange={fetchDataName} />
            <div>
                {name.map((dog) => (
                    <div>
                        <h1>{dog.name}</h1>
                        <ul>
                            {dog.breed_group && <li><b>Dog breed group:</b> {dog.breed_group}</li>}
                            {dog.bred_for && <li><b>Dog bred for:</b> {dog.bred_for}</li>}
                            {dog.origin ? <li><b>Dog origin:</b> {dog.origin}</li> : null}
                            {dog.temperament && <li><b>Dog temperament: </b>{dog.temperament}</li>}
                            <li><b>Life span:</b> {dog.life_span}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormComponents;