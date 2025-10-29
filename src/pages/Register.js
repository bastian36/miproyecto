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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="title">Crear Cuenta</h1>
            <form onSubmit={onSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input className="form-control" name="name" value={f.name} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input className="form-control" name="email" type="email" value={f.email} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input className="form-control" name="pass" type="password" value={f.pass} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input className="form-control" name="pass2" type="password" value={f.pass2} onChange={onChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono (opcional)</label>
                <input className="form-control" name="phone" value={f.phone} onChange={onChange} />
              </div>
              <button className="btn btn-primary w-100">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
