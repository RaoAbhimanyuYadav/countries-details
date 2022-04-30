import "./overview.css";
const Overview = ({ countryName, population, region, capital, flagSrc }) => {
  return (
    <div className="overview">
      <img className="flag" src={flagSrc} alt="Uruguay" />
      <div className="content">
        <div className="country-name">{countryName}</div>
        <p>
          <span>Population:</span>
          {population}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capital:</span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Overview;
