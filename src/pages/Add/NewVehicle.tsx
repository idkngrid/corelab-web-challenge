import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Arrow } from "../../components/GoBackButton/GoBackButton";
import { VehicleForm } from "../../components/VehicleForm/VehicleForm";

import api from '../../lib/api';

export function NewVehicle() {
    const navigate = useNavigate();

    function createVehicle(vehicle: any) {
        console.log(vehicle)
        api.post("/add", vehicle)
        navigate("/");
    }

    return (
        <div>
            <Arrow />
            <VehicleForm  
                handleSubmit={createVehicle}   
            />
        </div>
    )
}