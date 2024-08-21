import React, { useState, useRef, useEffect } from 'react';

interface Option {
  code: string;
  name: string;
}

interface SearchableDropdownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onClick?: any
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const selectedOption = options.find(option => option.code === value);
    setSearchTerm(selectedOption ? selectedOption.name : '');
  }, [value, options]);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    onChange(option.code);
    setSearchTerm(option.name);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div ref={dropdownRef} className="relative">
      <label className="block text-gray-700">{label} :</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={handleClick}
        className="mt-1 p-2 border border-gray-300 rounded sm:w-[450px] md:w-[550px] lg:w-[650px]"
        placeholder={placeholder}
        disabled={disabled}
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 bg-white rounded shadow-lg z-50">
          {filteredOptions.length ? (
            filteredOptions.map((option) => (
              <div
                key={option.code}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
