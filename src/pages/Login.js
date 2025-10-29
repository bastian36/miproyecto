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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="title">Iniciar Sesión</h1>
            <form onSubmit={onSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input className="form-control" name="username" value={form.username} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input className="form-control" name="email" type="email" value={form.email} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input className="form-control" name="password" type="password" value={form.password} onChange={onChange} required />
              </div>
              <button className="btn btn-primary w-100">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
