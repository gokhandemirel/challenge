import { Routes, Route } from 'react-router-dom';
import Hotel from '../pages/hotel';
import AddHotel from '../pages/addHotel';

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Hotel />} />
            <Route path="otel-ekle" element={<AddHotel />} />
        </Routes>
    );
}