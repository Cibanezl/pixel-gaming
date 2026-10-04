import React from 'react';

const ProductList = ({ productos, agregarAlCarrito, carrito }) => {
  return (
    <div className="product-list">
      <h2>Catálogo de Juegos</h2>
      <div className="grid">
        {productos.map((producto) => {
          // Verificamos si este producto ya existe dentro del carrito
          const yaEnCarrito = carrito.some((item) => item.id === producto.id);

          return (
            <div key={producto.id} className="card">
              <img src={producto.imagen} alt={producto.nombre} width="100%" />
              <h3>{producto.nombre}</h3>
              <p className="descripcion">{producto.descripcion}</p>
              
              <div className="precios">
                <span className="precio-normal">${producto.precioNormal}</span>
                <span className="precio-oferta">${producto.precioOferta}</span>
              </div>

              {/* RENDERIZADO CONDICIONAL EN EL BOTÓN: Cambia texto y estilo si ya está agregado */}
              <button 
                onClick={() => agregarAlCarrito(producto)}
                className={yaEnCarrito ? "btn-agregado" : "btn-agregar"}
              >
                {yaEnCarrito ? "En el carrito ✓" : "Agregar al Carrito"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;