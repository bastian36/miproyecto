# Documentación de Testing - LevelUp Gamer

## Configuración del Entorno de Pruebas

### Herramientas Utilizadas
- **Jasmine**: Framework de testing para JavaScript
- **Karma**: Test runner para ejecutar pruebas en navegadores reales
- **@testing-library/react**: Utilidades para testing de componentes React
- **Babel**: Transpilador para soportar JSX y ES6+

### Instalación
```bash
npm install
```

### Configuración de Karma
El archivo `karma.conf.js` contiene la configuración completa:
- Framework: Jasmine
- Preprocesadores: Webpack + Babel
- Navegador: Chrome
- Reportes: Spec + Coverage
- Cobertura de código en carpeta `coverage/`

## Pruebas Unitarias Implementadas

### 1. Navbar.spec.js
**Componente**: Navbar
**Pruebas**:
- Renderizado del logo
- Visualización de enlaces de navegación
- Mostrar botones de login cuando no hay usuario autenticado

**Conceptos aplicados**: Renderizado de componentes, testing de elementos DOM

### 2. Footer.spec.js
**Componente**: Footer
**Pruebas**:
- Renderizado de información de contacto
- Visualización del copyright

**Conceptos aplicados**: Testing de contenido estático, verificación de texto

### 3. NewsCard.spec.js
**Componente**: NewsCard
**Pruebas**:
- Renderizado de título y fecha
- Verificación de props
- Testing de evento onClick con mocks

**Conceptos aplicados**: Props, eventos, uso de mocks con jasmine.createSpy()

### 4. Login.spec.js
**Componente**: Login
**Pruebas**:
- Renderizado del formulario
- Actualización de estado en inputs
- Validación de credenciales incorrectas

**Conceptos aplicados**: Formularios, estados, validación, eventos de cambio

### 5. Register.spec.js
**Componente**: Register
**Pruebas**:
- Renderizado del formulario de registro
- Validación de contraseñas coincidentes

**Conceptos aplicados**: Validación de formularios, manejo de errores, localStorage

### 6. Productos.spec.js
**Componente**: Productos
**Pruebas**:
- Renderizado de lista de productos
- Visualización de stock
- Validación de autenticación para agregar al carrito

**Conceptos aplicados**: Listas, localStorage, autenticación

### 7. Cart.spec.js
**Componente**: Cart
**Pruebas**:
- Carrito vacío
- Renderizado de items
- Cálculo de total

**Conceptos aplicados**: Operaciones matemáticas, manejo de arrays, localStorage

### 8. Admin.spec.js
**Componente**: Admin
**Pruebas**:
- Validación de permisos
- Visualización de tabs según rol
- Gestión de stock

**Conceptos aplicados**: Autorización, roles de usuario, renderizado condicional

### 9. Contact.spec.js
**Componente**: Contact
**Pruebas**:
- Renderizado del formulario
- Actualización de estado
- Botón de envío

**Conceptos aplicados**: Formularios, placeholders, eventos

### 10. Boleta.spec.js
**Componente**: Boleta
**Pruebas**:
- Estado sin compras
- Renderizado de datos de compra
- Información de la empresa

**Conceptos aplicados**: Renderizado condicional, localStorage, formateo de datos

## Uso de Mocks

### Ejemplo en NewsCard.spec.js
```javascript
const mockProps = {
  onClick: jasmine.createSpy('onClick')
};
```
Los mocks permiten simular funciones y verificar que fueron llamadas correctamente.

### Ejemplo en localStorage
```javascript
beforeEach(() => {
  localStorage.clear();
});
```
Se limpia localStorage antes de cada prueba para evitar interferencias.

## Ejecución de Pruebas

### Ejecutar todas las pruebas con Jest
```bash
npm test
```

### Ejecutar pruebas en modo watch
```bash
npm test -- --watchAll=false
```

### Ver cobertura de código
```bash
npm test -- --coverage --watchAll=false
```
Después de ejecutar, abrir `coverage/lcov-report/index.html` en el navegador.

## Análisis de Resultados

### Métricas de Cobertura
- **Statements**: Líneas de código ejecutadas
- **Branches**: Ramas condicionales probadas
- **Functions**: Funciones ejecutadas
- **Lines**: Líneas totales cubiertas

### Interpretación
- Verde (>80%): Buena cobertura
- Amarillo (50-80%): Cobertura aceptable
- Rojo (<50%): Requiere más pruebas

## Mejores Prácticas Aplicadas

1. **Aislamiento**: Cada prueba es independiente
2. **Limpieza**: Se limpia localStorage antes de cada prueba
3. **Descriptivo**: Nombres claros de pruebas
4. **Mocks**: Uso de spies para funciones
5. **Aserciones**: Verificaciones específicas y claras

## Estructura de Archivos
```
src/
├── components/
│   ├── Navbar.js
│   ├── Navbar.spec.js
│   ├── Footer.js
│   ├── Footer.spec.js
│   └── NewsCard.spec.js
├── pages/
│   ├── Login.spec.js
│   ├── Register.spec.js
│   ├── Productos.spec.js
│   ├── Cart.spec.js
│   ├── Admin.spec.js
│   ├── Contact.spec.js
│   └── Boleta.spec.js
└── karma.conf.js
```

## Conclusión

Este proyecto implementa un proceso completo de testing unitario con:
- ✅ 10 pruebas unitarias funcionales
- ✅ Configuración de Karma y Jasmine
- ✅ Uso de mocks y spies
- ✅ Cobertura de código
- ✅ Testing de componentes React
- ✅ Validación de lógica de negocio
