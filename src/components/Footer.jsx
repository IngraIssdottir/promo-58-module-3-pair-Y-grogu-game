import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <nav>
        <NavLink to="/" className="footer-link">
          Home
        </NavLink>
        <NavLink to="/about" className="footer-link">
          About
        </NavLink>
        <NavLink to="/contact" className="footer-link">
          Contact
        </NavLink>
      </nav>
    </footer>
  );
}
export default Footer;
