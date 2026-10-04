import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import AddProductForm from './components/AddProductForm';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Carga de datos inicial mediante useEffect y fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('./productos.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setProductos(datos);
          setCargando(false);
        })
        .catch((error) => console.error("Error cargando productos:", error));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Función para agregar un nuevo juego al catálogo desde el formulario
  const agregarAlCatalogo = (nuevoJuego) => {
    setProductos([...productos, nuevoJuego]);
  };

  const agregarAlCarrito = (producto) => {
    const nuevoProducto = { ...producto, cartId: Date.now() + Math.random() };
    setCarrito([...carrito, nuevoProducto]);
  };

  const eliminarDelCarrito = (cartId) => {
    const nuevoCarrito = carrito.filter((item) => item.cartId !== cartId);
    setCarrito(nuevoCarrito);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 style={{ color: '#ffffff' }}>🎮 PixelGaming React Store</h1>
      </header>

      {/* Formulario para publicar juegos en el catálogo */}
      <section className="section-form">
        <AddProductForm agregarAlCatalogo={agregarAlCatalogo} />
      </section>

      <main className="main-content">
        {cargando ? (
          <div className="cargando-container">
            <h2>Cargando catálogo de juegos...</h2>
          </div>
        ) : (
          <ProductList 
            productos={productos} 
            agregarAlCarrito={agregarAlCarrito} 
            carrito={carrito}
          />
        )}
        
        <ShoppingCart 
          carrito={carrito} 
          eliminarDelCarrito={eliminarDelCarrito} 
        />
      </main>
    </div>
  );
}

export default App;