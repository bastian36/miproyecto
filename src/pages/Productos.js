import { useState, useEffect } from "react";
import ps5 from "../img/imgsProductos/PlayStation5.png";
import headset from "../img/imgsProductos/Audifono Hyper X.png";
import mouse from "../img/imgsProductos/Mouse Gamer.png";
import mousepad from "../img/imgsProductos/MousePad.png";
import silla from "../img/imgsProductos/Silla Gamer.png";
import rog from "../img/imgsProductos/Rog Strix.png";
import camisa from "../img/imgsProductos/Camisa LevelUp.png";
import catan from "../img/imgsProductos/Catan.png";
import carcassonne from "../img/imgsProductos/Carcassonne.png";
import xbox from "../img/imgsProductos/Control Xbox.png";

const initialProducts = [
  { id: 1, name: "PlayStation 5", price: 699990, image: ps5, category: "Consolas", stock: 10 },
  { id: 2, name: "Audífono HyperX", price: 69990, image: headset, category: "Audio", stock: 25 },
  { id: 3, name: "Mouse Gamer RGB", price: 29990, image: mouse, category: "Periféricos", stock: 50 },
  { id: 4, name: "Mouse Pad XL", price: 14990, image: mousepad, category: "Periféricos", stock: 100 },
  { id: 5, name: "Silla Gamer", price: 129990, image: silla, category: "Mobiliario", stock: 15 },
  { id: 6, name: "Rog Strix GPU", price: 549990, image: rog, category: "Componentes", stock: 8 },
  { id: 7, name: "Polera LevelUp", price: 12990, image: camisa, category: "Merch", stock: 200 },
  { id: 8, name: "Catan", price: 37990, image: catan, category: "Juegos de mesa", stock: 30 },
  { id: 9, name: "Carcassonne", price: 34990, image: carcassonne, category: "Juegos de mesa", stock: 20 },
  { id: 10, name: "Control Xbox", price: 59990, image: xbox, category: "Periféricos", stock: 40 },
];

function formatCLP(n) {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
}

export default function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      localStorage.setItem("products", JSON.stringify(initialProducts));
      setProducts(initialProducts);
    }
  }, []);

  const addToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Debes iniciar sesión para comprar");
      return;
    }

    if (product.stock <= 0) {
      alert("Producto sin stock");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find(item => item.id === product.id);
    
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito");
  };

  return (
    <section className="page">
      <h1 className="title">Productos</h1>
      <div className="container-fluid">
        <div className="row g-4">
          {products.map((p) => (
            <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="product-card h-100">
                <img src={p.image} alt={p.name} />
                <div className="product-body">
                  <div className="product-name">{p.name}</div>
                  <div className="product-price">{formatCLP(p.price)}</div>
                  <div style={{color: "var(--muted)", fontSize: "14px", margin: "4px 0"}}>Stock: {p.stock}</div>
                  <button 
                    className="btn btn-primary w-100" 
                    onClick={() => addToCart(p)}
                    disabled={p.stock <= 0}
                  >
                    {p.stock > 0 ? "Agregar al carro" : "Sin stock"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
