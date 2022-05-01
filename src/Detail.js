import "./detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import useData from "./useData";

const Detail = () => {
  const data = useData();
  const id = useParams("id");

  const countryDetails = data.find((d) => {
    return d.cca3 === id.id;
  });
  let border_contries = null;

  if (countryDetails?.borders) {
    border_contries = countryDetails.borders.map((b) => {
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
      {countryDetails && (
        <>
          <div className="back" onClick={handleBack}>
            <KeyboardBackspaceIcon />
            <span>Back</span>
          </div>
          <div className="flex-detail">
            <div className="flag">
              <img src={countryDetails?.flags.png} alt="flag" />
            </div>
            <div className="grid-detail">
              <div className="left">
                <h2>{countryDetails.name.common}</h2>
                <p>
                  <span>Region: </span>
                  {countryDetails.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {countryDetails.subregion}
                </p>
                <p>
                  <span>Population: </span>
                  {countryDetails.population}
                </p>

                <p>
                  <span>Capital: </span>
                  {countryDetails.capital[0]}
                </p>
              </div>
              <div className="right">
                <p>
                  <span>Top level domain: </span>
                  {countryDetails.tld.join(", ")}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.keys(countryDetails.currencies)
                    .map((key) => countryDetails.currencies[key].name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.keys(countryDetails.languages)
                    .map((k) => countryDetails.languages[k])
                    .join(", ")}
                </p>
              </div>
              <div className="bottom">
                <span>Border Countries: </span>
                <span>
                  {!countryDetails.borders && "No boundaries"}
                  {countryDetails.borders &&
                    border_contries?.map((cont) => {
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
        </>
      )}
    </div>
  );
};

export default Detail;
