import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); console.log("Login ->", form); };

  return (
    <section className="page">
      <h1 className="title">Iniciar Sesión</h1>
      <form className="form" onSubmit={onSubmit}>
        <label>Correo</label>
        <input name="email" type="email" value={form.email} onChange={onChange} />
        <label>Contraseña</label>
        <input name="password" type="password" value={form.password} onChange={onChange} />
        <button className="btn btn-primary">Iniciar sesión</button>
      </form>
    </section>
  );
}
