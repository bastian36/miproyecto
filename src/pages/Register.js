import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PREDEFINED_USERS = [
  { username: "Admin", email: "Admin123@gmail.com", password: "Admin", role: "admin" },
  { username: "maxy123", email: "maxy123@gmail.com", password: "maxy123", role: "vendedor" }
];

export default function Register() {
  const [f, setF] = useState({ name:"", email:"", pass:"", pass2:"", phone:"" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value });
  
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (f.pass !== f.pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const allUsers = [...PREDEFINED_USERS, ...users];
    
    if (allUsers.find(u => u.email === f.email)) {
      setError("El correo ya está registrado");
      return;
    }
    
    const newUser = {
      username: f.name,
      email: f.email,
      password: f.pass,
      phone: f.phone,
      role: "cliente"
    };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    
    alert("Cuenta creada exitosamente");
    navigate("/");
    window.location.reload();
  };

  return (
    <section className="page">
      <h1 className="title">Crear Cuenta</h1>
      <form className="form" onSubmit={onSubmit}>
        {error && <div style={{color: "#ff4444", padding: "12px", background: "#331111", borderRadius: "8px"}}>{error}</div>}
        <label>Nombre completo</label>
        <input name="name" value={f.name} onChange={onChange} required />
        <label>Correo</label>
        <input name="email" type="email" value={f.email} onChange={onChange} required />
        <label>Contraseña</label>
        <input name="pass" type="password" value={f.pass} onChange={onChange} required />
        <label>Confirmar contraseña</label>
        <input name="pass2" type="password" value={f.pass2} onChange={onChange} required />
        <label>Teléfono (opcional)</label>
        <input name="phone" value={f.phone} onChange={onChange} />
        <button className="btn btn-primary">Registrarse</button>
      </form>
    </section>
  );
}
