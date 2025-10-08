import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PREDEFINED_USERS = [
  { username: "Admin", email: "Admin123@gmail.com", password: "Admin", role: "admin" },
  { username: "maxy123", email: "maxy123@gmail.com", password: "maxy123", role: "vendedor" }
];

export default function Login() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const allUsers = [...PREDEFINED_USERS, ...users];
    
    const user = allUsers.find(u => u.email === form.email && u.password === form.password);
    
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`Bienvenido ${user.username} (${user.role})`);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      window.location.reload();
    } else {
      setError("INGRESE SU CLAVE O NOMBRE DE USUARIO CREADO");
    }
  };

  return (
    <section className="page">
      <h1 className="title">Iniciar Sesión</h1>
      <form className="form" onSubmit={onSubmit}>
        {error && <div style={{color: "#ff4444", padding: "12px", background: "#331111", borderRadius: "8px"}}>{error}</div>}
        <label>Nombre de usuario</label>
        <input name="username" value={form.username} onChange={onChange} required />
        <label>Correo</label>
        <input name="email" type="email" value={form.email} onChange={onChange} required />
        <label>Contraseña</label>
        <input name="password" type="password" value={form.password} onChange={onChange} required />
        <button className="btn btn-primary">Iniciar sesión</button>
      </form>
    </section>
  );
}
