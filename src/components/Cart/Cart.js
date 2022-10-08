import React from 'react';

const Cart = ({cart, handleRemoveToCart}) => {
    return (
        <div>
            <h3>Order summary: {cart.length} </h3>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >

                    {tshirt.name}
                    <button onClick={() => handleRemoveToCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;