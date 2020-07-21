import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Container, Title, CartItem } from './CartStyles';

import Avatar from '@material-ui/core/Avatar';


const Cart = () => {
    const cartContext = useContext(CartContext);
    let totalValue = 0;

    cartContext.cart.forEach(product => {
        totalValue = totalValue + product.price * product.quantity
    })

    const handleRemoveFromCart = productId => {
        cartContext.dispatch({type: "REMOVE_FROM_CART", productId})
    };

    return (
        <Container>
            <Title>Carrinho</Title>
            
            {cartContext.cart.map(product => {
                return (
                    <CartItem
                        key={product.id}
                        avatar={<Avatar alt={product.name} src={product.img} />}
                        label={`${product.name} - ${product.quantity}x - R$ ${product.price.toFixed(2)}`}
                        onDelete={() => handleRemoveFromCart(product.id)}
                        color="secondary"
                    />
                )
            })}

            <p>Total R$ {totalValue.toFixed(2)}</p>
        </Container>
    )
}

export default Cart;