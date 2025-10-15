import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function formatCLP(n) {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
}

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQuantity = (id, change) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        if (newQty <= 0) return null;
        if (newQty > item.stock) {
          alert("No hay suficiente stock");
          return item;
        }
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean);
    
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const checkout = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Debes iniciar sesión");
      return;
    }

    if (user.role === "vendedor" || user.role === "admin") {
      alert("Los vendedores y administradores no pueden realizar compras");
      return;
    }

    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    // Actualizar stock
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    cart.forEach(cartItem => {
      const product = products.find(p => p.id === cartItem.id);
      if (product) {
        product.stock -= cartItem.quantity;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));

    // Generar boleta
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const boleta = {
      fecha: new Date().toLocaleString("es-CL"),
      cliente: user.username,
      email: user.email,
      items: cart,
      total
    };

    // Guardar historial
    const history = JSON.parse(localStorage.getItem("purchaseHistory") || "[]");
    history.push(boleta);
    localStorage.setItem("purchaseHistory", JSON.stringify(history));

    // Limpiar carrito
    localStorage.removeItem("cart");
    setCart([]);

    alert("Compra realizada con éxito");
    navigate("/boleta");
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section className="page">
      <h1 className="title">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p style={{textAlign: "center", color: "var(--muted)"}}>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{formatCLP(item.price)}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="cart-item-total">{formatCLP(item.price * item.quantity)}</div>
                <button className="cart-item-remove" onClick={() => removeItem(item.id)}>✕</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: {formatCLP(total)}</h2>
            <button className="btn btn-primary" onClick={checkout}>Finalizar Compra</button>
          </div>
        </>
      )}
    </section>
  );
}
