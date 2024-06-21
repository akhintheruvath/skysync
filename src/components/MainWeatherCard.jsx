import { useEffect, useState } from "react";
import { WeatherCardText } from "./WeatherCardText";
import { SunnyIcon } from "./icons/SunnyIcon";
import { useWeatherData } from "../hooks/useWeatherData";
import { Dropdown } from "./DropDown";

export const MainWeatherCard = () => {
   const [selectedOption, setSelectedOption] = useState({ value: 'Delhi', label: 'Delhi' });
   const [params, setParams] = useState({
      cityName: "Delhi",
   });

   const locations = [
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Moscow', label: 'Moscow' },
      { value: 'Paris', label: 'Paris' },
      { value: 'New York County', label: 'New York' },
      { value: 'Sydney', label: 'Sydney' },
      { value: 'Riyadh', label: 'Riyadh' },
   ];

   useEffect(() => {
      setParams({ cityName: selectedOption.value });
   }, [selectedOption]);

   const { data: weatherData, isLoading, error } = useWeatherData(params);

   if(isLoading) {
      return (
         <div className="flex justify-center mt-10 text-2xl">
            Loading Data...
         </div>
      );
   }
   
   if(error) {
      return (
         <div className="flex justify-center mt-10 text-2xl text-red-300">
            {error.message}
         </div>
      );
   }

   return (
      <div className="bg-[#f9edbe] md:w-1/3 2xl:w-1/6 p-8 rounded-lg flex flex-col items-center text-center">
         <WeatherCardText extraStyles="text-xl font-medium mb-4">Today</WeatherCardText>
         <div className="flex items-center mb-4">
            <span className="mr-4"><SunnyIcon /></span>
            <WeatherCardText extraStyles="text-7xl font-medium">{weatherData.temperature}<sup>°</sup></WeatherCardText>
         </div>
         <WeatherCardText extraStyles="text-xs font-semibold mb-4">{weatherData.weatherType}</WeatherCardText>
         <Dropdown
            options={locations}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
         />
         <WeatherCardText extraStyles="text-xs font-medium mb-4">{weatherData.date}</WeatherCardText>
         <WeatherCardText extraStyles="text-xs font-medium">Feels like {weatherData.feelsLike} I Sunset {weatherData.sunset}</WeatherCardText>
      </div>
   );
}