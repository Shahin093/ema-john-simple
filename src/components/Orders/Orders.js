import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';

const Orders = () => {
    const [products, setProduct] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>THis is Orders{products.length}</h2>
            <p>Cart has : {cart.length}</p>
        </div>
    );
};

export default Orders;