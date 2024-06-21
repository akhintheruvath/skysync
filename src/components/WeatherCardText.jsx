export const WeatherCardText = ({ extraStyles = "", children }) => {
   return (
      <p className={`text-[#EFAA82] font-poppins ${extraStyles}`}>
         {children}
      </p>
   );
}