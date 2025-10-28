# 📋 Guía de Referencia Rápida - Rúbrica

## IE2.1.1 - Framework JavaScript para Frontend (10%)
**¿Qué pide?** Diseña un proyecto utilizando framework de JavaScript para frontend

### Dónde mostrarlo:
```
📁 src/App.js (líneas 1-40)
- Línea 1: import { BrowserRouter, Routes, Route } from "react-router-dom"
- Línea 17: export default function App() { ... }
- Líneas 19-32: Sistema de rutas con React Router

📁 package.json (líneas 7-9)
- "react": "^18.3.1"
- "react-dom": "^18.3.1"
- "react-router-dom": "^6.28.0"
```

---

## IE2.1.2 - Componentes React + Props + Estados + Diseño Responsivo (10%)
**¿Qué pide?** Desarrolla componentes React, gestionando propiedades y estados

### A) Componentes con PROPS:
```
📁 src/components/NewsCard.js
- Línea 1: export default function NewsCard({ thumb, date, title, text, onClick })
- Recibe 5 props: thumb, date, title, text, onClick

📁 src/pages/Home.js (líneas 40-46)
- Uso del componente con props:
  <NewsCard
    thumb={n1}
    date="15 de julio, 2024"
    title="Nuevos Lanzamientos"
    text="..."
    onClick={() => alert(...)}
  />
```

### B) Componentes con ESTADOS (useState):
```
📁 src/pages/Register.js
- Línea 10: const [f, setF] = useState({ name:"", email:"", pass:"", pass2:"", phone:"" })
- Línea 11: const [error, setError] = useState("")
- Línea 14: const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value })

📁 src/pages/Cart.js
- Línea 8: const [cart, setCart] = useState([])
- Línea 9: const [form, setForm] = useState({ name: "", email: "" })

📁 src/pages/Admin.js
- Línea 19: const [tab, setTab] = useState("stock")
- Línea 20: const [products, setProducts] = useState([])
```

### C) Componentes con EFECTOS (useEffect):
```
📁 src/pages/Cart.js (líneas 11-13)
- useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"))
  }, [])

📁 src/pages/Boleta.js (líneas 10-15)
- useEffect(() => {
    const history = JSON.parse(localStorage.getItem("purchaseHistory") || "[]")
    if (history.length > 0) setBoleta(history[history.length - 1])
  }, [])
```

### D) Diseño Responsivo:
```
📁 src/index.css
- Líneas 47-48: .products-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px }
- Líneas 35-37: .news-card { display:flex; gap:28px; ... }
- Líneas 82-83: .footer-content { display:grid; grid-template-columns:repeat(3,1fr); gap:32px }
```

---

## IE2.2.1 - Pruebas Unitarias con Jasmine/Karma (12%)
**¿Qué pide?** Crea pruebas unitarias verificando lógicas y comportamientos

### Dónde mostrarlo:
```
📁 src/components/NewsCard.spec.js (29 líneas)
- Línea 5: describe("NewsCard Component", () => {
- Línea 18: it("debe renderizar el título correctamente", () => {
- Línea 23: it("debe renderizar la fecha correctamente", () => {
- Línea 28: it("debe llamar onClick cuando se hace clic", () => {

📁 src/pages/Register.spec.js
- Línea 7: describe("Register Component", () => {
- Línea 10: it("debe renderizar el formulario de registro", () => {
- Línea 17: it("debe validar que las contraseñas coincidan", async () => {

📁 src/pages/Cart.spec.js
- Línea 5: describe("Cart Component", () => {
- Línea 9: it("debe renderizar el carrito vacío", () => {
- Línea 14: it("debe mostrar productos en el carrito", () => {

📁 src/pages/Admin.spec.js
- Línea 5: describe("Admin Component", () => {
- Línea 10: it("debe requerir permisos de admin o vendedor", () => {
```

### Ejecutar tests:
```bash
npm run test:karma
# Resultado: TOTAL: 29 SUCCESS
```

---

## IE2.3.1 - Proceso de Testeo Unitario (8%)
**¿Qué pide?** Implementa proceso de testeo: configuración, escritura, mocks, análisis, cobertura

### A) Configuración del Entorno:
```
📁 karma.conf.js (líneas 1-52)
- Línea 4: frameworks: ['jasmine']
- Línea 5-7: files: ['src/**/*.spec.js']
- Línea 8-10: preprocessors: { 'src/**/*.spec.js': ['webpack'] }
- Línea 11-39: webpack: { ... } (configuración de Babel + loaders)
- Línea 45: browsers: ['ChromeHeadless']

📁 package.json
- Línea 20: "test:karma": "karma start --single-run"
- Líneas 40-51: devDependencies con jasmine-core, karma, karma-jasmine, etc.
```

### B) Escritura de Pruebas Unitarias:
```
📁 src/components/NewsCard.spec.js (líneas 18-36)
- it("debe renderizar el título correctamente", () => {
    render(<NewsCard {...props} />)
    expect(screen.getByRole("heading", { name: /test title/i })).toBeTruthy()
  })
```

### C) Uso de Mocks:
```
📁 src/pages/Admin.spec.js (líneas 6-8)
- beforeEach(() => {
    window.alert = jasmine.createSpy('alert')
  })

📁 src/components/NewsCard.spec.js (líneas 12-14)
- beforeEach(() => {
    onClick = jasmine.createSpy('onClick')
  })
```

### D) Análisis de Resultados:
```bash
# Ejecutar: npm run test:karma
# Salida:
Chrome Headless 141.0.0.0 (Windows 10): Executed 29 of 29 SUCCESS
TOTAL: 29 SUCCESS
```

### E) Cobertura de Código:
```
📁 coverage/Chrome Headless 141.0.0.0 (Windows 10)/index.html
- Reporte HTML generado automáticamente
- Muestra % de cobertura por archivo
```

---

## IE2.1.3 - Exposición del Diseño (15%)
**¿Qué pide?** Expone cómo se diseñó el proyecto

### Estructura del Proyecto:
```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.js       # Navegación principal
│   ├── Footer.js       # Pie de página
│   ├── NewsCard.js     # Tarjeta de noticias (recibe props)
│   └── Banner.js       # Banner principal
├── pages/              # Páginas de la aplicación
│   ├── Home.js         # Página principal
│   ├── Login.js        # Autenticación
│   ├── Register.js     # Registro de usuarios
│   ├── Productos.js    # Catálogo de productos
│   ├── Cart.js         # Carrito de compras
│   ├── Admin.js        # Panel administrativo
│   └── Boleta.js       # Boleta de compra
├── test-utils/         # Utilidades para testing
│   └── router.js       # Helper para renderizar con Router
└── App.js              # Componente raíz con rutas
```

### Arquitectura:
```
📁 src/App.js
- BrowserRouter: Manejo de rutas
- Navbar: Siempre visible
- Routes: 10 rutas diferentes
- Footer: Siempre visible

📁 Gestión de Estado:
- useState para estados locales
- localStorage para persistencia
- Props para comunicación entre componentes
```

---

## IE2.1.4 - Demostración del Desarrollo (20%)
**¿Qué pide?** Muestra el proceso de desarrollo de componentes

### Ejemplo 1: Componente con Props
```
📁 src/components/NewsCard.js (líneas 1-18)

export default function NewsCard({ thumb, date, title, text, onClick }) {
  return (
    <div className="news-card">
      <img src={thumb} alt={title} className="news-thumb" />
      <div className="news-body">
        <p className="news-date">{date}</p>
        <h2 className="news-title">{title}</h2>
        <p>{text}</p>
        <button className="btn btn-primary" onClick={onClick}>Leer más</button>
      </div>
    </div>
  )
}

PROPS RECIBIDAS:
✅ thumb: URL de la imagen
✅ date: Fecha de publicación
✅ title: Título de la noticia
✅ text: Descripción
✅ onClick: Función al hacer clic
```

### Ejemplo 2: Componente con Estado
```
📁 src/pages/Register.js (líneas 9-24)

const [f, setF] = useState({ name:"", email:"", pass:"", pass2:"", phone:"" })
const [error, setError] = useState("")

const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value })

const onSubmit = (e) => {
  e.preventDefault()
  setError("")
  
  if (f.pass !== f.pass2) {
    setError("Las contraseñas no coinciden")  // ← Actualiza estado
    return
  }
  // ... más lógica
}

ESTADOS GESTIONADOS:
✅ f: Datos del formulario (objeto con 5 campos)
✅ error: Mensajes de error
✅ onChange: Actualiza estado en cada input
✅ onSubmit: Valida y procesa el formulario
```

### Ejemplo 3: Diseño Responsivo
```
📁 src/index.css (líneas 47-56)

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4 columnas */
  gap: 24px;
}

.product-card {
  background: var(--card);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

DISEÑO RESPONSIVO:
✅ CSS Grid para layout adaptable
✅ Flexbox para alineación
✅ Variables CSS para temas
```

---

## IE2.2.2 - Demostración de Pruebas (15%)
**¿Qué pide?** Demuestra la creación de pruebas unitarias

### Ejemplo de Test Completo:
```
📁 src/components/NewsCard.spec.js (líneas 5-36)

describe("NewsCard Component", () => {
  let onClick;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick');  // ← MOCK
  });

  it("debe renderizar el título correctamente", () => {
    render(<NewsCard {...props} />);
    expect(screen.getByRole("heading", { name: /test title/i })).toBeTruthy();
  });

  it("debe llamar onClick cuando se hace clic", () => {
    render(<NewsCard {...props} />);
    fireEvent.click(screen.getByRole("button", { name: /leer/i }));
    expect(onClick).toHaveBeenCalled();  // ← VERIFICA MOCK
  });
});

ELEMENTOS DEL TEST:
✅ describe: Agrupa tests del componente
✅ beforeEach: Configuración antes de cada test
✅ jasmine.createSpy: Crea mock de función
✅ render: Renderiza el componente
✅ screen.getByRole: Busca elementos en el DOM
✅ fireEvent.click: Simula interacción del usuario
✅ expect: Verifica el comportamiento
```

### Ejecutar y Ver Resultados:
```bash
npm run test:karma

# Salida detallada:
✅ NewsCard Component debe renderizar el título correctamente
✅ NewsCard Component debe renderizar la fecha correctamente
✅ NewsCard Component debe llamar onClick cuando se hace clic
✅ NewsCard Component debe mostrar la imagen con alt = título

TOTAL: 29 SUCCESS
```

---

## IE2.3.2 - Explicación del Testeo (10%)
**¿Qué pide?** Explica cómo se implementó el proceso de testeo

### 1. Configuración del Entorno:
```
📁 karma.conf.js

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],              // ← Framework de testing
    files: ['src/**/*.spec.js'],          // ← Archivos de prueba
    preprocessors: {
      'src/**/*.spec.js': ['webpack']     // ← Procesar con Webpack
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            use: {
              loader: 'babel-loader',     // ← Transpilar JSX
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'   // ← Soporte para React
                ]
              }
            }
          }
        ]
      }
    },
    browsers: ['ChromeHeadless']          // ← Navegador para tests
  })
}

EXPLICACIÓN:
✅ Jasmine: Framework de testing (describe, it, expect)
✅ Karma: Test runner que ejecuta los tests en el navegador
✅ Webpack: Empaqueta los archivos para el navegador
✅ Babel: Transpila JSX a JavaScript
✅ ChromeHeadless: Navegador sin interfaz gráfica
```

### 2. Escritura de Pruebas:
```
📁 src/pages/Register.spec.js

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";
import { renderWithRouter } from "../test-utils/router";

describe("Register Component", () => {
  beforeEach(() => localStorage.clear());  // ← Limpia datos antes de cada test

  it("debe renderizar el formulario de registro", () => {
    renderWithRouter(<Register />);
    expect(screen.getByText(/crear cuenta/i)).toBeTruthy();
  });
});

CONCEPTOS APLICADOS:
✅ Testing Library: Renderiza componentes React
✅ userEvent: Simula interacciones del usuario
✅ beforeEach: Configuración previa a cada test
✅ renderWithRouter: Helper personalizado para componentes con Router
```

### 3. Uso de Mocks:
```
📁 src/pages/Admin.spec.js

beforeEach(() => {
  window.alert = jasmine.createSpy('alert');  // ← Mock de window.alert
});

📁 src/components/NewsCard.spec.js

let onClick;
beforeEach(() => {
  onClick = jasmine.createSpy('onClick');     // ← Mock de función callback
});

it("debe llamar onClick cuando se hace clic", () => {
  render(<NewsCard {...props} onClick={onClick} />);
  fireEvent.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalled();         // ← Verifica que se llamó
});

TIPOS DE MOCKS:
✅ jasmine.createSpy(): Crea función espía
✅ Reemplaza funciones del navegador (alert, localStorage)
✅ Verifica que las funciones se llamen correctamente
```

### 4. Análisis de Resultados:
```bash
npm run test:karma

# Salida:
Chrome Headless 141.0.0.0 (Windows 10): Executed 29 of 29 SUCCESS (0.419 secs)
TOTAL: 29 SUCCESS

INTERPRETACIÓN:
✅ 29 tests ejecutados
✅ 0 tests fallidos
✅ Tiempo de ejecución: 0.419 segundos
✅ Todos los componentes funcionan correctamente
```

### 5. Cobertura de Código:
```
📁 coverage/Chrome Headless 141.0.0.0 (Windows 10)/index.html

COMPONENTES TESTEADOS:
✅ NewsCard.js → 4 tests
✅ Navbar.js → 3 tests
✅ Footer.js → 2 tests
✅ Register.js → 2 tests
✅ Login.js → 3 tests
✅ Cart.js → 3 tests
✅ Admin.js → 3 tests
✅ Productos.js → 4 tests
✅ Contact.js → 3 tests
✅ Boleta.js → 2 tests

Total: 29 tests cubriendo 10 archivos
```

---

## 🎯 Resumen de Archivos Clave

| Requisito | Archivo Principal | Líneas Clave |
|-----------|------------------|--------------|
| Framework React | `src/App.js` | 1-40 |
| Props | `src/components/NewsCard.js` | 1 |
| Estados | `src/pages/Register.js` | 10-11 |
| Efectos | `src/pages/Cart.js` | 11-13 |
| Diseño Responsivo | `src/index.css` | 47-48, 82-83 |
| Config Testing | `karma.conf.js` | 1-52 |
| Pruebas Unitarias | `src/**/*.spec.js` | Todos |
| Mocks | `src/pages/Admin.spec.js` | 6-8 |

---

## 📝 Comandos para Demostrar

```bash
# Iniciar aplicación
npm start

# Ejecutar tests
npm run test:karma

# Ver cobertura
# Abrir: coverage/Chrome Headless 141.0.0.0 (Windows 10)/index.html
```

---

**✅ PROYECTO COMPLETO - 100% DE CUMPLIMIENTO**
