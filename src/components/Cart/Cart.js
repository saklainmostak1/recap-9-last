import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveToCart}) => {
    let messege;
    if(cart.length === 0){
        messege = 'please buy some items'
    }
    else if(cart.length === 1)
    {
        messege = 'buy one more please'
    }
    else{
        messege = 'thanks'
    }
    return (
        <div>
            <h3 className={ cart.length === 3 ?` orange` :` blue`}>Order summary </h3>
            <h3>Order Quantity: {cart.length} </h3>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >

                    {tshirt.name}
                    <button onClick={() => handleRemoveToCart(tshirt)}>X</button>
                </p>)
            }
            {
                messege
            }
            <br />
            {
                cart.length === 3 ? 'wow' : 'ohh no'
            }
            <br />
            {
                cart.length === 4 && 'thats great'
            }
            {
                cart.length === 4 || 'not 4 items'
            }
        </div>
    );
};

export default Cart;