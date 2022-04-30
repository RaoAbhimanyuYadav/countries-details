// import { useEffect } from "react";
// import Fetch from "./Fetch";
import Home from "./Home";

function App() {
  // useEffect(() => {
  //   Fetch()
  //     .then((res) => {
  //       localStorage.setItem("countryData", JSON.stringify(res));
  //       console.log(JSON.parse(JSON.stringify(res)));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
