import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../img/LevelUpLogo.png";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

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
        {user ? (
          <>
            <Link className="btn btn-primary" to="/cart">🛒 Carrito</Link>
            <span style={{color: "var(--text)", marginRight: "12px"}}>{user.username}</span>
            <button className="btn btn-primary" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link className="btn btn-primary" to="/login">Iniciar sesión</Link>
            <Link className="btn btn-primary" to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </header>
  );
}
