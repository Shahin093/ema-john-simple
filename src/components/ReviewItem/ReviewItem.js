import React from 'react';

const ReviewItem = (props) => {
    const { id, name, shipping, quantity, price } = props.product;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default ReviewItem;