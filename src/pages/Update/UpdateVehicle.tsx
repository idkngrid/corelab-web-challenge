import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../components/GoBackButton/GoBackButton";
import { VehicleForm } from "../../components/VehicleForm/VehicleForm";

export function UpdateVehicle() {
    const navigate = useNavigate();

    async function updateVehicle(e: FormEvent) {
        e.preventDefault();

        // try {
        //     await api.post('/add', {
        //         title, 
        //         brand,
        //         color,
        //         year,
        //         plate
        //     })
        // } catch (error) {
        //     console.log(error);
        // }

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