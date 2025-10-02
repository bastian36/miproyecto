import { useState } from "react";

export default function Contact() {
  const [f, setF] = useState({ name:"", email:"", msg:"" });
  const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); console.log("Contacto ->", f); };

  return (
    <section className="page">
      <h1 className="title">Contacto</h1>
      <form className="form" onSubmit={onSubmit}>
        <input placeholder="Nombre completo" name="name" value={f.name} onChange={onChange} />
        <input placeholder="Correo electrónico" name="email" type="email" value={f.email} onChange={onChange} />
        <textarea placeholder="Escribe tu mensaje..." name="msg" rows="6" value={f.msg} onChange={onChange} />
        <button className="btn btn-primary">Enviar Mensaje</button>
      </form>
    </section>
  );
}
