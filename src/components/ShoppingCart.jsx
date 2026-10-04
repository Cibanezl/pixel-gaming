import React from 'react';
import CartTotal from './CartTotal';

const ShoppingCart = ({ carrito, eliminarDelCarrito }) => {
  return (
    <div className="shopping-cart">
      <h2>Tu Carrito</h2>
      
      {carrito.length === 0 ? (
        <p className="mensaje-vacio">El carrito está vacío. ¡Agrega algunos juegos!</p>
      ) : (
        <>
          <ul className="cart-items">
            {carrito.map((producto) => (
              <li key={producto.cartId}>
                <span>{producto.nombre} - ${producto.precioOferta}</span>
                <button 
                  className="btn-eliminar" 
                  onClick={() => eliminarDelCarrito(producto.cartId)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          
          <CartTotal carrito={carrito} />
        </>
      )}
    </div>
  );
};

export default ShoppingCart;