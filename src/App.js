// import { useEffect } from "react";
// import Fetch from "./Fetch";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
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
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
