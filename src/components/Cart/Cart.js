import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order summary: {cart.length} </h3>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >

                    {tshirt.name}
                    <button>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;