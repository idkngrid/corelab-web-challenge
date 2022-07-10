import { Routes, Route } from "react-router-dom";
import { Filter } from "./pages/Filter/Filter";
import { NewVehicle } from "./pages/Add/NewVehicle";
import { UpdateVehicle } from "./pages/Update/UpdateVehicle";
import { Vehicles } from "./pages/Home/Vehicles";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Vehicles />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/add" element={<NewVehicle />} />
            <Route path="/update/:id" element={<UpdateVehicle />} />
            <Route path="/filter" element={<Filter />} />
        </Routes>
    )
}