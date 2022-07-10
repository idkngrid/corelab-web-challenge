import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../components/GoBackButton/GoBackButton";
import { VehicleForm } from "../../components/VehicleForm/VehicleForm";

import api from "../../lib/api";

interface Vehicle {
    id: Number;
    title: String;
    description: String;
    color: String;
    year: Number;
    price: Number;
    isFavorite: Boolean;
}


export function UpdateVehicle() {
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState<Vehicle[]>([]);

    useEffect(() => {
        api.get(`/vehicles/${}`)
            .then(response => {
                setVehicle(response.data);
            })
            .catch(err => console.log(err));
    })

    async function updateVehicle(vehicle) {
        try {
            api.put(`/update/${id}`)
        } catch (error) {
            console.log(error);
        }

        navigate('/');
    }

    return (
        <div>
            <Arrow />
            <VehicleForm   
                handleSubmit={updateVehicle}
            />
        </div>
    )
}