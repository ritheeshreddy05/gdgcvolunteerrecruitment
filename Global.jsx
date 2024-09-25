import React, { useState, useEffect } from 'react';
import ItemList from '../itemlist/ItemList';
import Cart from '../cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function Global() 
{
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetch items from the Fake Store API
    useEffect(() => 
    {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function addToCart(item) 
    {
        const itemInCart = cart.find(cartItem => cartItem.id === item.id);
        if (itemInCart) 
        {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } 
        else 
        {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    }

    function removeFromCart(id) 
    {
        setCart(cart.filter(cartItem => cartItem.id !== id));
    }

    function increaseQuantity(id) 
    {
        setCart(cart.map(cartItem =>
            cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
    }

    function decreaseQuantity(id) 
    {
        setCart(cart.map(cartItem =>
            cartItem.id === id && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        ));
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">ALL AT ONE</h1>
            <div className="row">
                <div className="col-md-8">
                    <ItemList items={items} addToCart={addToCart} />
                </div>
                <div className="col-md-4">
                    <Cart
                        cart={cart}
                        removeFromCart={removeFromCart}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                </div>
            </div>
        </div>
    );
}

export default Global;
