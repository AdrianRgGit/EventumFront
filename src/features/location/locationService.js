import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : "https://eventum-back.vercel.app";

const createLocation = async (formData) => {
    const res = await axios.post(`${API_URL}/locations/create`, formData);
    return res.data;
};

const deleteLocation = async (id) => {
    const res = await axios.delete(`${API_URL}/locations/delete/${id}`);
    return res.data;
};

const getLocationById = async (id) => {
    const res = await axios.get(`${API_URL}/locations/getbyid/${id}`);
    return res.data;
};

const locationService = {
    createLocation,
    deleteLocation,
    getLocationById,
};

export default locationService;
