import { useEffect, useState } from "react";
import { countriesFlag } from "../../utils/helpers/helper";
import { useDispatch } from "react-redux";
import { setUserrCountry } from "../../store/slice/userSlice";

const CustomSelect: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{
    name: string;
    flag: string;
  } | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectCountry = (country: { name: string; flag: string } | null) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(setUserrCountry(selectedCountry));
  }, [selectedCountry]);
  return (
    <div className="select-container">
      <div className="font-medium selected-item" onClick={toggleDropdown}>
        {selectedCountry ? selectedCountry.name : "Select Country"}
        {selectedCountry ? (
          <img className="flag" alt="canada" src={selectedCountry?.flag} />
        ) : (
          <span className="arrow">{isOpen ? "▲" : "▼"}</span>
        )}
      </div>
      {isOpen && (
        <ul className="font-medium dropdown">
          {countriesFlag.map((country, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => selectCountry(country)}
            >
              {country.name}
              <img className="flag" src={country.flag} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
