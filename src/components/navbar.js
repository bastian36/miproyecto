import { Link, NavLink } from "react-router-dom";
import logo from "../img/leveluplogo.png"; // ajusta el nombre si es distinto

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="Level-Up Gamer" />
      </Link>

      <nav className="menu">
        <NavLink to="/products">Productos</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>

      <div className="actions">
        <Link className="btn btn-primary" to="/login">Iniciar sesión</Link>
        <Link className="btn btn-primary" to="/register">Registrarse</Link>
      </div>
    </header>
  );
}
