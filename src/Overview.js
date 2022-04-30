import "./overview.css";
import { Link } from "react-router-dom";
const Overview = ({ c }) => {
  return (
    <div className="overview">
      <Link to={"/" + c.id}>
        <div className="flags" style={{ background: `url(${c.flagSrc}) center center/cover` }}></div>
        <div className="content">
          <div className="c-name">{c.name}</div>
          <p>
            <span>Population:</span>
            {c.population}
          </p>
          <p>
            <span>Region:</span>
            {c.region}
          </p>
          <p>
            <span>Capital:</span>
            {c.capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Overview;
