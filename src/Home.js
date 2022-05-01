import Overview from "./Overview";
import "./home.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useData from "./useData";

const Home = () => {
  const data = useData();
  const [region, setRegion] = useState("All");
  const [searchCountry, setSearchCountry] = useState("");
  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  let countries = data || [];
  if (region !== "All") {
    countries = countries.filter((country) => {
      return country.region.includes(region);
    });
  }
  const handleSearch = (e) => {
    setSearchCountry(e.target.value.trim());
  };

  let searchedCounteries = countries.filter((country) => {
    return JSON.stringify(country).toLowerCase().includes(searchCountry.toLowerCase());
  });

  return (
    <div className="home">
      <div className="home-filter">
        <div className="search">
          <SearchIcon />
          <input type="text" onChange={handleSearch} placeholder="Search for the country..." />
        </div>
        <select onChange={handleChange}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid-container">
        {searchedCounteries.map((country) => (
          <Overview key={country.cca3} c={{ name: country.name.common, region: country.region, population: country.population, capital: country.capital, id: country.cca3, flagSrc: country.flags.png }} />
        ))}
      </div>
    </div>
  );
};

export default Home;
