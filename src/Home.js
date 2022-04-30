import Navbar from "./Navbar";
import Overview from "./Overview";
import "./home.css";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("countryData"));
  console.log(data[0]);

  return (
    <div className="home">
      <Navbar />
      <div className="home-filter">
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search for the country..." />
        </div>
        <select name="filter-region" id="filter-region">
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocenia">Ocenia</option>
        </select>
      </div>
      <div className="grid-container">
        {data.map((country) => (
          <Overview countryName={country.name.common} population={country.population} Region={country.region} capital={country.capital} key={country.cca3} flagSrc={country.flags.png} />
        ))}
      </div>
    </div>
  );
};

export default Home;
