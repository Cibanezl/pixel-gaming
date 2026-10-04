# 🎮 PixelGaming React Store

Aplicación web de e-commerce desarrollada con **React** y **Vite** para la **Evaluación Sumativa 3 (Semana 8)** de la asignatura **Desarrollo Frontend I (PFY2201)** en Duoc UC.

---

## 🚀 Demo en Vivo
Puedes probar la aplicación desplegada en línea en el siguiente enlace:  
👉 **[PixelGaming en GitHub Pages](https://cibanezl.github.io/pixel-gaming/)**

---

## 🛠️ Tecnologías Utilizadas
- **React 18** (Componentes funcionales y Hooks)
- **Vite** (Build tool y entorno de desarrollo)
- **JavaScript (ES6+)**
- **CSS3** (Estilos globales e interfaz responsiva)
- **GitHub Pages** (Despliegue continuo con `gh-pages`)

---

## ⚙️ Funcionalidades Implementadas
- **Carga Dinámica de Datos (`useEffect`):** Simulación de petición asíncrona mediante `fetch` cargando el catálogo desde `public/productos.json`.
- **Gestión de Estado Global (`useState`):** Manejo dinámico del carrito de compras y del catálogo de videojuegos.
- **Formulario Interactivo:** Componente `AddProductForm` que permite publicar nuevos juegos al catálogo en tiempo real.
- **Renderizado Condicional:** 
  - Estado de carga (*"Cargando catálogo..."*).
  - Estado del carrito vacío (*"El carrito está vacío..."*).
  - Estado del botón dinámico (*"Agregar al Carrito"* / *"En el carrito ✓"*).

---

## 💻 Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Cibanezl/pixel-gaming.git](https://github.com/Cibanezl/pixel-gaming.git)
   cd pixel-gaming