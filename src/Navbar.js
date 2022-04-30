import "./navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Where in the world?</h3>
      <section className="darkmode">
        <DarkModeIcon />
        <span>Dark Mode</span>
      </section>
    </div>
  );
};

export default Navbar;
