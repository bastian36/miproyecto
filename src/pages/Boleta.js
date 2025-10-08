import { useState, useEffect } from "react";

function formatCLP(n) {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
}

export default function Boleta() {
  const [boleta, setBoleta] = useState(null);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("purchaseHistory") || "[]");
    if (history.length > 0) {
      setBoleta(history[history.length - 1]);
    }
  }, []);

  if (!boleta) {
    return (
      <section className="page">
        <h1 className="title">Boleta</h1>
        <p style={{textAlign: "center", color: "var(--muted)"}}>No hay compras recientes</p>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="boleta">
        <h1 className="title">Boleta de Compra</h1>
        <div className="boleta-header">
          <h2>LevelUp Gamer</h2>
          <p>Santiago, Chile</p>
          <p>contacto@levelup.cl</p>
          <p>+56 2 2345 6789</p>
        </div>
        
        <div className="boleta-info">
          <p><strong>Fecha:</strong> {boleta.fecha}</p>
          <p><strong>Cliente:</strong> {boleta.cliente}</p>
          <p><strong>Email:</strong> {boleta.email}</p>
        </div>

        <table className="boleta-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unit.</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {boleta.items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{formatCLP(item.price)}</td>
                <td>{formatCLP(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="boleta-total">
          <h2>Total: {formatCLP(boleta.total)}</h2>
        </div>

        <button className="btn btn-primary" onClick={() => window.print()}>Imprimir Boleta</button>
      </div>
    </section>
  );
}
