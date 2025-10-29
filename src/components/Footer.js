import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="footer-section">
              <h3>LevelUp Gamer</h3>
              <p>Tu tienda de confianza para todo lo gaming</p>
              <p>📍 Santiago, Chile</p>
              <p>✉️ contacto@levelup.cl</p>
              <p>📞 +56 2 2345 6789</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-section">
              <h4>Enlaces</h4>
              <Link to="/products">Productos</Link>
              <Link to="/about">Nosotros</Link>
              <Link to="/contact">Contacto</Link>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-section">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              © 2024 LevelUp. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
