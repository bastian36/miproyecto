import { useState } from "react";

export default function Admin() {
  const [tab, setTab] = useState("orders");

  return (
    <section className="page admin">
      <aside className="sidebar">
        <button className={`sidebtn ${tab==="orders"?"active":""}`} onClick={()=>setTab("orders")}>Órdenes de compra</button>
        <button className={`sidebtn ${tab==="users"?"active":""}`} onClick={()=>setTab("users")}>Usuarios</button>
        <button className={`sidebtn ${tab==="stock"?"active":""}`} onClick={()=>setTab("stock")}>Stock</button>
      </aside>

      <div className="panel">
        <h1 className="title">
          {tab==="orders" && "Órdenes de compra"}
          {tab==="users" && "Usuarios"}
          {tab==="stock" && "Stock"}
        </h1>
        <p>No hay {tab==="orders"?"órdenes":tab} registradas.</p>
      </div>
    </section>
  );
}
