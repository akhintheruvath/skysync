import Select from 'react-select';

export const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
   const handleSelectChange = (selectedOpt) => {
      setSelectedOption(selectedOpt);
   };

   return (
      <div className="mb-4">
         <Select
            id="filter"
            value={selectedOption}
            onChange={handleSelectChange}
            options={options}
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
               control: (provided, state) => ({
                  ...provided,
                  backgroundColor: "#f9edbe",
               }),
            }}
            placeholder="Filter By Status"
         />
      </div>
   );
};