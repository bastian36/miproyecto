import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function formatCLP(n) {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
}

export default function Admin() {
  const [tab, setTab] = useState("orders");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const loadData = () => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
    setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
    setPurchases(JSON.parse(localStorage.getItem("purchaseHistory") || "[]"));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user || (user.role !== "admin" && user.role !== "vendedor")) {
      alert("No tienes permisos para acceder");
      navigate("/");
      return;
    }
    setCurrentUser(user);
    loadData();
  }, [navigate]);

  if (!currentUser) return null;

  const deleteUser = (email) => {
    if (!window.confirm("¿Eliminar este usuario?")) return;
    const updated = users.filter(u => u.email !== email);
    localStorage.setItem("users", JSON.stringify(updated));
    setUsers(updated);
  };

  const updateStock = (id, newStock) => {
    const updated = products.map(p => p.id === id ? {...p, stock: parseInt(newStock)} : p);
    localStorage.setItem("products", JSON.stringify(updated));
    setProducts(updated);
  };

  const cancelPurchase = (index) => {
    if (!window.confirm("¿Anular esta compra?")) return;
    
    const purchase = purchases[index];
    const updatedProducts = [...products];
    
    purchase.items.forEach(item => {
      const product = updatedProducts.find(p => p.id === item.id);
      if (product) {
        product.stock += item.quantity;
      }
    });
    
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    
    const updatedPurchases = purchases.filter((_, i) => i !== index);
    localStorage.setItem("purchaseHistory", JSON.stringify(updatedPurchases));
    setPurchases(updatedPurchases);
    
    alert("Compra anulada y stock restaurado");
  };

  const isAdmin = currentUser?.role === "admin";

  return (
    <section className="page admin">
      <aside className="sidebar">
        <button className={`sidebtn ${tab==="orders"?"active":""}`} onClick={()=>setTab("orders")}>Órdenes de compra</button>
        {isAdmin && <button className={`sidebtn ${tab==="users"?"active":""}`} onClick={()=>setTab("users")}>Usuarios</button>}
        <button className={`sidebtn ${tab==="stock"?"active":""}`} onClick={()=>setTab("stock")}>Stock</button>
      </aside>

      <div className="panel">
        {tab === "orders" && (
          <>
            <h1 className="title">Órdenes de compra</h1>
            {purchases.length === 0 ? (
              <p>No hay compras registradas.</p>
            ) : (
              <div className="admin-table">
                {purchases.map((p, idx) => (
                  <div key={idx} className="admin-card">
                    <div><strong>Fecha:</strong> {p.fecha}</div>
                    <div><strong>Cliente:</strong> {p.cliente}</div>
                    <div><strong>Email:</strong> {p.email}</div>
                    <div><strong>Total:</strong> {formatCLP(p.total)}</div>
                    <div><strong>Productos:</strong></div>
                    <ul>
                      {p.items.map(item => (
                        <li key={item.id}>{item.name} x{item.quantity} - {formatCLP(item.price * item.quantity)}</li>
                      ))}
                    </ul>
                    <button className="btn btn-primary" onClick={() => cancelPurchase(idx)}>Anular Compra</button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {tab === "users" && isAdmin && (
          <>
            <h1 className="title">Usuarios</h1>
            {users.length === 0 ? (
              <p>No hay usuarios registrados.</p>
            ) : (
              <table className="admin-table-grid">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.email}>
                      <td>{u.username}</td>
                      <td>{u.email}</td>
                      <td>{u.role}</td>
                      <td>
                        <button className="btn-delete" onClick={() => deleteUser(u.email)}>✕ Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {tab === "stock" && (
          <>
            <h1 className="title">Gestión de Stock</h1>
            <table className="admin-table-grid">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  {isAdmin && <th>Acción</th>}
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.category}</td>
                    <td>{formatCLP(p.price)}</td>
                    <td>
                      {isAdmin ? (
                        <input 
                          type="number" 
                          value={p.stock} 
                          onChange={(e) => updateStock(p.id, e.target.value)}
                          style={{width: "80px", padding: "4px", background: "#0f0f0f", border: "1px solid #2a2a2a", color: "var(--text)", borderRadius: "4px"}}
                        />
                      ) : (
                        p.stock
                      )}
                    </td>
                    {isAdmin && <td><span style={{color: p.stock < 10 ? "#ff4444" : "#4caf50"}}>{p.stock < 10 ? "Stock bajo" : "OK"}</span></td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
}
