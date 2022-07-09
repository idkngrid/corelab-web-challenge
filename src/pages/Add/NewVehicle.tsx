import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../components/GoBackButton/GoBackButton";
import { VehicleForm } from "../../components/VehicleForm/VehicleForm";

import api from '../../lib/api';

import styles from './NewVehicle.module.scss';


export function NewVehicle() {
    const navigate = useNavigate();
    const [title, setTitle] =  useState('');
    const [description, setDescription] =  useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [plate, setPlate] = useState('');

    async function createVehicle(e: FormEvent) {
        e.preventDefault();

        try {
            await api.post('/add', {
                title, 
                description,
                brand,
                color,
                year,
                plate
            })
        } catch (error) {
            console.log(error);
        }

        navigate('/');
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