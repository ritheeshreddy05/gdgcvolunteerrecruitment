import React from 'react';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="list-group">
                    {cart.map(cartItem => (
                        <div key={cartItem.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={cartItem.image} alt={cartItem.title} className="cart-image me-2" style={{ height: '50px', width: '50px', objectFit: 'cover' }} />
                                <div>
                                    <h5 className="mb-1">{cartItem.title}</h5>
                                    <p className="mb-0">Price: ${cartItem.price}</p>
                                    <p className="mb-0">Quantity: {cartItem.quantity}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => increaseQuantity(cartItem.id)} className="btn btn-sm btn-outline-primary me-1">+</button>
                                <button onClick={() => decreaseQuantity(cartItem.id)} className="btn btn-sm btn-outline-secondary me-1">-</button>
                                <button onClick={() => removeFromCart(cartItem.id)} className="btn btn-sm btn-danger">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
