import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Arrow } from "../../components/GoBackButton/GoBackButton";
import { VehicleForm } from "../../components/VehicleForm/VehicleForm";

import { IVehicle } from '../../types/Vehicle';
import api from "../../lib/api";

export function UpdateVehicle() {
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({});
    
    const { id } = useParams();

    useEffect(() => {
        api.get(`/vehicle/${id}`)
            .then(response => {
                setVehicle(response.data);
            })
            .catch(err => console.log(err));
    }, [id])

    async function updateVehicle(vehicle: IVehicle) {
        try {
            // await api.put(`/update/${vehicle.id}`)
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
                vehicleData={vehicle}
            />
        </div>
    )
}