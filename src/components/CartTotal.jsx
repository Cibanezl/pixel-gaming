import React from 'react';

const CartTotal = ({ carrito }) => {
  const total = carrito.reduce((acumulador, producto) => acumulador + producto.precioOferta, 0);

  return (
    <div className="cart-total">
      <h3>Resumen de Compra</h3>
      <p>Total de productos: <strong>{carrito.length}</strong></p>
      <p>Total a Pagar: <strong>${total}</strong></p>
    </div>
  );
};

export default CartTotal;