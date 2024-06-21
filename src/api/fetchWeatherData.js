import { api } from "./api";

export const fetchWeatherData = async (params) => {
   const response = await api.get(`/current-weather`, { params });
   const data = response.data.data;
   return data;
}