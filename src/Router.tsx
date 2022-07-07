import { Routes, Route } from "react-router-dom";
import { Filter } from "./pages/Filter";
import { NewVehicle } from "./pages/NewVehicle";
import { UpdateVehicle } from "./pages/UpdateVehicle";
import { Vehicles } from "./pages/Vehicles";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Vehicles />} />
            <Route path="/add" element={<NewVehicle />} />
            <Route path="/update" element={<UpdateVehicle />} />
            <Route path="/filter" element={<Filter />} />
        </Routes>
    )
}