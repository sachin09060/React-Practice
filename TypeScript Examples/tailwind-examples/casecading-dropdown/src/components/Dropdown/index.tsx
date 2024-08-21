import React, { useState } from 'react';
import { countries, states, cities } from './../../assets/data';
import SearchableDropdown from './../../components/SearchableDropdown';

const Dropdowns: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCity('');
  };

  const handleClick = () => {
    setSelectedState('');
    setSelectedCity('');
  }


  return (
    <div className="p-4 space-y-4 flex flex-col justify-center items-center w-full">
      <div>
        <SearchableDropdown
          label="Country"
          options={countries}
          value={selectedCountry}
          placeholder={'Select Your Country'}
          onChange={handleCountryChange}
          onClick={handleClick}
        />
      </div>

      <div>
        <SearchableDropdown
          label="State"
          options={selectedCountry ? states[selectedCountry] || [] : []}
          value={selectedState}
          placeholder={'Select Your State'}
          onChange={handleStateChange}
          disabled={!selectedCountry}
        />
      </div>

      <div>
        <SearchableDropdown
          label="City"
          options={selectedState ? cities[selectedState] || [] : []}
          value={selectedCity}
          placeholder={'Select Your City'}
          onChange={setSelectedCity}
          disabled={!selectedState}
        />
      </div>
    </div>
  );
};

export default Dropdowns;
