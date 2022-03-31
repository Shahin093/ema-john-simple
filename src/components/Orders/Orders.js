import React from 'react';
import useProducts from '../../hooks/useProduct';

const Orders = () => {
    const [products, setProduct] = useProducts();
    return (
        <div>
            <h2>THis is Orders{products.length}</h2>
        </div>
    );
};

export default Orders;