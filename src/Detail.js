import "./detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Detail = () => {
  const data = JSON.parse(localStorage.getItem("countryData"));
  const id = useParams("id");

  const countryDetails = data.filter((d) => {
    return d.cca3 === id.id;
  });
  const d = countryDetails[0];
  let border_contries = null;
  if (d.borders) {
    border_contries = d.borders.map((b) => {
      return data.find((d) => {
        return d.cca3 === b;
      });
    });
  }
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail">
      <div className="back" onClick={handleBack}>
        <KeyboardBackspaceIcon />
        <span>Back</span>
      </div>
      <div className="flex-detail">
        <div className="flag">
          <img src={d.flags.png} alt="flag" />
        </div>
        <div className="grid-detail">
          <div className="left">
            <h2>{d.name.common}</h2>
            <p>
              <span>Region: </span>
              {d.region}
            </p>
            <p>
              <span>Sub Region: </span>
              {d.subregion}
            </p>
            <p>
              <span>Population: </span>
              {d.population}
            </p>

            <p>
              <span>Capital: </span>
              {d.capital[0]}
            </p>
          </div>
          <div className="right">
            <p>
              <span>Top level domain: </span>
              {d.tld.join(", ")}
            </p>
            <p>
              <span>Currencies: </span>
              {Object.keys(d.currencies)
                .map((key) => d.currencies[key].name)
                .join(", ")}
            </p>
            <p>
              <span>Languages: </span>
              {Object.keys(d.languages)
                .map((k) => d.languages[k])
                .join(", ")}
            </p>
          </div>
          <div className="bottom">
            <span>Border Countries: </span>
            <span>
              {!d.borders && "No boundaries"}
              {d.borders &&
                border_contries.map((cont) => {
                  return (
                    <Link to={"/" + cont.cca3} key={cont.cca3}>
                      <button>{cont.name.common}</button>
                    </Link>
                  );
                })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
