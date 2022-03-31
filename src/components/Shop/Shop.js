import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    // const [cart, setCart] = useCart(products);

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log('strodcart ', storedCart);
        const saveCart = [];
        // console.log('Local storage first line ');
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            // console.log('addedproduct : ', addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                // console.log('id', quantity)
                addedProduct.quantity = quantity;

                // console.log(addedProduct);
                saveCart.push(addedProduct);
                // console.log('save : ', saveCart);

            }
            setCart(saveCart);
            // console.log(addedProduct);
        }
        // console.log('Local storage finish');
    }, [products])

    /* useEffect(() => {
        const storedcart = getStoredCart();
        const saveCart = [];
        for (const id in storedcart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedcart[id];
                storedcart.quantity = quantity;
                saveCart.push(storedcart);
            }
        }
        setCart(saveCart);
    }, [products]) */



    const handleAddToCart = (product) => {
        // console.log('clicked', product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;