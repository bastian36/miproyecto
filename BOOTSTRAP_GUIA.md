# 📘 Guía Bootstrap - Dónde y Cómo se Implementó

## 🔧 1. Instalación de Bootstrap

### Comando usado:
```bash
npm install bootstrap
```

### Evidencia en package.json (línea 6):
```json
"dependencies": {
  "bootstrap": "^5.3.3"
}
```

**Ubicación**: `package.json` línea 6

---

## 📥 2. Importación de Bootstrap

### Archivo: src/index.js (línea 3)
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
```

**¿Por qué aquí?**
- Se importa ANTES del CSS personalizado
- Bootstrap proporciona la base, CSS custom lo personaliza
- Se carga una sola vez para toda la aplicación

**Ubicación**: `src/index.js` línea 3

---

## 🎨 3. Sistema de Grid Responsivo de Bootstrap

### A) Productos - src/pages/Productos.js (líneas 69-91)

```javascript
<div className="container-fluid">
  <div className="row g-4">
    {products.map((p) => (
      <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="product-card h-100">
          {/* contenido */}
        </div>
      </div>
    ))}
  </div>
</div>
```

**Clases Bootstrap usadas:**
- `container-fluid`: Contenedor de ancho completo
- `row`: Fila del sistema de grid
- `g-4`: Gap (espacio) de 1.5rem entre columnas
- `col-12`: 100% ancho en móvil (1 columna)
- `col-sm-6`: 50% ancho en tablet (2 columnas)
- `col-md-4`: 33% ancho en desktop mediano (3 columnas)
- `col-lg-3`: 25% ancho en desktop grande (4 columnas)
- `h-100`: Altura 100% (todas las tarjetas igual altura)
- `w-100`: Ancho 100% en botones

**Resultado:**
- 📱 Móvil (< 576px): 1 producto por fila
- 📱 Tablet (576-768px): 2 productos por fila
- 💻 Desktop (768-992px): 3 productos por fila
- 🖥️ Desktop XL (> 992px): 4 productos por fila

---

### B) Navbar - src/components/Navbar.js (líneas 21-48)

```javascript
<header className="navbar">
  <div className="container-fluid">
    <div className="row align-items-center w-100">
      <div className="col-auto">
        <Link to="/" className="brand">
          <img src={logo} alt="Level-Up Gamer" />
        </Link>
      </div>

      <div className="col">
        <nav className="menu d-flex gap-3">
          <NavLink to="/products">Productos</NavLink>
          {/* más links */}
        </nav>
      </div>

      <div className="col-auto">
        <div className="actions d-flex gap-2">
          <span className="d-none d-md-inline">{user.username}</span>
          {/* botones */}
        </div>
      </div>
    </div>
  </div>
</header>
```

**Clases Bootstrap usadas:**
- `container-fluid`: Contenedor fluido
- `row`: Fila del grid
- `align-items-center`: Alinea verticalmente al centro
- `w-100`: Ancho 100%
- `col-auto`: Ancho automático según contenido
- `col`: Toma el espacio restante
- `d-flex`: Display flex
- `gap-2`, `gap-3`: Espaciado entre elementos
- `d-none d-md-inline`: Oculta en móvil, muestra en desktop

**Resultado:**
- Logo + Menú + Acciones en una fila
- En móvil, el username se oculta para ahorrar espacio

---

### C) Footer - src/components/Footer.js (líneas 4-37)

```javascript
<footer>
  <div className="container-fluid">
    <div className="row g-4">
      <div className="col-12 col-md-4">
        <div className="footer-section">
          <h3>LevelUp Gamer</h3>
          {/* contenido */}
        </div>
      </div>
      <div className="col-12 col-md-4">
        {/* sección 2 */}
      </div>
      <div className="col-12 col-md-4">
        {/* sección 3 */}
      </div>
    </div>
  </div>
</footer>
```

**Clases Bootstrap usadas:**
- `container-fluid`: Contenedor fluido
- `row g-4`: Fila con gap de 1.5rem
- `col-12`: 100% en móvil (apilado verticalmente)
- `col-md-4`: 33.33% en desktop (3 columnas)

**Resultado:**
- 📱 Móvil: 3 secciones apiladas verticalmente
- 💻 Desktop: 3 columnas horizontales

---

### D) Formularios - src/pages/Login.js y Register.js

#### Login.js (líneas 39-62)
```javascript
<div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <h1 className="title">Iniciar Sesión</h1>
      <form onSubmit={onSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input className="form-control" name="username" />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input className="form-control" name="email" type="email" />
        </div>
        
        <button className="btn btn-primary w-100">Iniciar sesión</button>
      </form>
    </div>
  </div>
</div>
```

**Clases Bootstrap usadas:**
- `container`: Contenedor con max-width
- `row`: Fila del grid
- `justify-content-center`: Centra horizontalmente
- `col-12 col-md-8 col-lg-6`: Ancho responsivo del formulario
- `alert alert-danger`: Alerta de error (roja)
- `mb-3`: Margin bottom de 1rem
- `form-label`: Estilo de etiqueta de formulario
- `form-control`: Estilo de input de Bootstrap
- `btn btn-primary`: Botón primario de Bootstrap
- `w-100`: Ancho 100%

**Resultado:**
- Formulario centrado
- 📱 Móvil: 100% de ancho
- 💻 Desktop: 50% de ancho (más legible)

---

### E) Carrito - src/pages/Cart.js (líneas 93-125)

```javascript
<div className="container">
  <div className="row g-3 mb-4">
    {cart.map(item => (
      <div key={item.id} className="col-12">
        <div className="cart-item d-flex flex-wrap align-items-center gap-3">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info flex-grow-1">
            <h3>{item.name}</h3>
          </div>
          <div className="cart-item-actions d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-primary">-</button>
            <span className="fw-bold">{item.quantity}</span>
            <button className="btn btn-sm btn-primary">+</button>
          </div>
          <button className="btn btn-danger btn-sm">✕</button>
        </div>
      </div>
    ))}
  </div>
  
  <div className="row">
    <div className="col-12">
      <div className="cart-summary text-end">
        <button className="btn btn-primary btn-lg">Finalizar Compra</button>
      </div>
    </div>
  </div>
</div>
```

**Clases Bootstrap usadas:**
- `container`: Contenedor con max-width
- `row g-3`: Fila con gap de 1rem
- `mb-4`: Margin bottom de 1.5rem
- `col-12`: Columna de ancho completo
- `d-flex`: Display flex
- `flex-wrap`: Permite que los elementos se envuelvan
- `align-items-center`: Alinea verticalmente al centro
- `gap-2`, `gap-3`: Espaciado entre elementos
- `flex-grow-1`: Crece para ocupar espacio disponible
- `btn btn-sm`: Botón pequeño
- `btn btn-primary`: Botón primario (azul)
- `btn btn-danger`: Botón de peligro (rojo)
- `btn btn-lg`: Botón grande
- `fw-bold`: Font weight bold
- `text-end`: Alinea texto a la derecha

---

## 📊 4. Resumen de Componentes Bootstrap Usados

| Componente | Clases Bootstrap | Archivo |
|------------|------------------|---------|
| **Grid System** | `container-fluid`, `row`, `col-*` | Todos |
| **Spacing** | `g-2`, `g-3`, `g-4`, `mb-3`, `mb-4`, `gap-2`, `gap-3` | Todos |
| **Flexbox** | `d-flex`, `align-items-center`, `justify-content-center`, `flex-wrap`, `flex-grow-1` | Navbar, Cart |
| **Sizing** | `w-100`, `h-100` | Productos, Formularios |
| **Display** | `d-none`, `d-md-inline` | Navbar |
| **Forms** | `form-control`, `form-label`, `alert alert-danger` | Login, Register |
| **Buttons** | `btn`, `btn-primary`, `btn-danger`, `btn-sm`, `btn-lg` | Todos |
| **Typography** | `fw-bold`, `text-center`, `text-end` | Cart, Formularios |

---

## 🎯 5. Cómo Demostrarlo al Profesor

### Paso 1: Mostrar la Instalación
```bash
# Abrir package.json
# Mostrar línea 6: "bootstrap": "^5.3.3"
```

### Paso 2: Mostrar la Importación
```javascript
// Abrir src/index.js
// Mostrar línea 3: import 'bootstrap/dist/css/bootstrap.min.css';
```

### Paso 3: Mostrar el Grid Responsivo
```javascript
// Abrir src/pages/Productos.js
// Mostrar líneas 69-91
// Explicar: col-12 col-sm-6 col-md-4 col-lg-3
```

### Paso 4: Demostrar en el Navegador
1. Abrir `npm start`
2. Ir a `/products`
3. Abrir DevTools (F12)
4. Activar modo responsive
5. Cambiar entre tamaños:
   - 📱 375px (móvil): 1 columna
   - 📱 768px (tablet): 2-3 columnas
   - 💻 1200px (desktop): 4 columnas

### Paso 5: Mostrar Componentes de Bootstrap
```javascript
// Abrir src/pages/Login.js
// Mostrar:
// - form-control (inputs estilizados)
// - alert alert-danger (mensajes de error)
// - btn btn-primary (botones)
```

---

## 💬 6. Respuestas Preparadas para el Profesor

### "¿Dónde está Bootstrap?"
> "Bootstrap está instalado como dependencia en `package.json` línea 6, e importado en `src/index.js` línea 3. Se carga antes del CSS personalizado para que sirva como base del diseño."

### "¿Cómo implementaste el diseño responsivo?"
> "Utilicé el sistema de grid de Bootstrap con clases como `col-12 col-sm-6 col-md-4 col-lg-3` en la página de productos. Esto hace que en móvil se muestre 1 columna, en tablet 2-3 columnas, y en desktop 4 columnas. También usé clases de utilidad como `d-flex`, `gap-3`, y `d-none d-md-inline` para controlar el layout y la visibilidad en diferentes tamaños de pantalla."

### "¿Qué componentes de Bootstrap usaste?"
> "Usé varios componentes:
> - **Grid System**: `container-fluid`, `row`, `col-*` para layouts responsivos
> - **Forms**: `form-control`, `form-label`, `alert` para formularios
> - **Buttons**: `btn`, `btn-primary`, `btn-danger` para botones estilizados
> - **Utilities**: `d-flex`, `gap-*`, `mb-*`, `w-100` para espaciado y alineación
> - **Responsive**: `d-none d-md-inline` para ocultar elementos en móvil"

### "¿Por qué también tienes CSS personalizado?"
> "Bootstrap proporciona la estructura y el sistema de grid responsivo, pero el CSS personalizado define la identidad visual del proyecto: colores, tipografía, y estilos específicos de los componentes. Es una práctica común usar Bootstrap como base y personalizarlo con CSS custom."

---

## 📁 7. Archivos Clave para Mostrar

1. **package.json** (línea 6) - Instalación
2. **src/index.js** (línea 3) - Importación
3. **src/pages/Productos.js** (líneas 69-91) - Grid responsivo
4. **src/components/Navbar.js** (líneas 21-48) - Layout con Bootstrap
5. **src/pages/Login.js** (líneas 39-62) - Componentes de formulario
6. **src/pages/Cart.js** (líneas 93-125) - Flexbox y utilidades

---

## ✅ Checklist de Cumplimiento

- ✅ Bootstrap instalado (`npm install bootstrap`)
- ✅ Bootstrap importado en `src/index.js`
- ✅ Sistema de grid responsivo implementado (`row`, `col-*`)
- ✅ Componentes de Bootstrap usados (`form-control`, `btn`, `alert`)
- ✅ Clases de utilidad aplicadas (`d-flex`, `gap-*`, `mb-*`)
- ✅ Diseño responsivo funcional (móvil, tablet, desktop)
- ✅ Media queries adicionales en CSS para ajustes finos

---

**🎓 PROYECTO CUMPLE 100% CON EL REQUISITO DE BOOTSTRAP**
