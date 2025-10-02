// src/pages/Productos.js
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

const products = [
  { id: 1, name: "PlayStation 5", price: 699990, image: ps5, category: "Consolas" },
  { id: 2, name: "Audífono HyperX", price: 69990, image: headset, category: "Audio" },
  { id: 3, name: "Mouse Gamer RGB", price: 29990, image: mouse, category: "Periféricos" },
  { id: 4, name: "Mouse Pad XL", price: 14990, image: mousepad, category: "Periféricos" },
  { id: 5, name: "Silla Gamer", price: 129990, image: silla, category: "Mobiliario" },
  { id: 6, name: "Rog Strix GPU", price: 549990, image: rog, category: "Componentes" },
  { id: 7, name: "Polera LevelUp", price: 12990, image: camisa, category: "Merch" },
  { id: 8, name: "Catan", price: 37990, image: catan, category: "Juegos de mesa" },
  { id: 9, name: "Carcassonne", price: 34990, image: carcassonne, category: "Juegos de mesa" },
  { id: 10, name: "Control Xbox", price: 59990, image: xbox, category: "Periféricos" },
];

function formatCLP(n) {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
}

export default function Productos() {
  return (
    <section className="page">
      <h1 className="title">Productos</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <div className="product-body">
              <div className="product-name">{p.name}</div>
              <div className="product-price">{formatCLP(p.price)}</div>
              <button className="btn btn-primary">Agregar al carro</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
