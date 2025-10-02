import { useState } from "react";

export default function Register() {
  const [f, setF] = useState({ name:"", email:"", pass:"", pass2:"", phone:"" });
  const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (f.pass !== f.pass2) return alert("Las contraseñas no coinciden");
    console.log("Register ->", f);
  };

  return (
    <section className="page">
      <h1 className="title">Crear Cuenta</h1>
      <form className="form" onSubmit={onSubmit}>
        <label>Nombre completo</label>
        <input name="name" value={f.name} onChange={onChange} />
        <label>Correo</label>
        <input name="email" type="email" value={f.email} onChange={onChange} />
        <label>Contraseña</label>
        <input name="pass" type="password" value={f.pass} onChange={onChange} />
        <label>Confirmar contraseña</label>
        <input name="pass2" type="password" value={f.pass2} onChange={onChange} />
        <label>Teléfono (opcional)</label>
        <input name="phone" value={f.phone} onChange={onChange} />
        <button className="btn btn-primary">Registrarse</button>
      </form>
    </section>
  );
}
