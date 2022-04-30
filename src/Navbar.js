import "./navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
const Navbar = () => {
  const [mode, setMode] = useState("Dark");
  var r = document.querySelector(":root");
  const handleDarkMode = () => {
    if (mode === "Dark") {
      r.style.setProperty("--element", "hsl(0, 0%, 100%)");
      r.style.setProperty("--background", "hsl(0, 0%, 95%)");
      r.style.setProperty("--text-color", "hsl(200, 15%, 8%)");
      setMode("Light");
    } else {
      r.style.setProperty("--element", "hsl(209, 23%, 22%)");
      r.style.setProperty("--background", "hsl(207, 26%, 17%)");
      r.style.setProperty("--text-color", "hsl(0, 0%, 98%)");
      setMode("Dark");
    }
  };
  return (
    <div className="navbar">
      <h3>Where in the world?</h3>
      <section className="darkmode" onClick={handleDarkMode}>
        <DarkModeIcon />
        <span>Dark Mode</span>
      </section>
    </div>
  );
};

export default Navbar;
