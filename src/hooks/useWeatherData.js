import { useQuery } from 'react-query';
import { fetchWeatherData } from '../api/fetchWeatherData';

export const useWeatherData = (params) => {
   return useQuery(["weatherData", params], () => fetchWeatherData(params));
}