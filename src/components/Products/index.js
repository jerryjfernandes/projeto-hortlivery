import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CartContext from '../../contexts/CartContext';
import { Container, Product, Image } from './ProductsStyles';

import Button from '@material-ui/core/Button';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/lojinha";


const Products = () => {
    const [products, setProducts] = useState([]);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        axios.get(baseUrl).then(response => {
            setProducts(response.data)
        })
    }, [])

    const addToCart = product => {
        cartContext.dispatch({type: "ADD_TO_CART", product: product})
    }

    return (
        <Container>
            {products.map(product => (
                <Product key={product.id} >
                    <p>
                        {product.name} - R$ {product.price.toFixed(2)}
                    </p>
                    <Image src={product.img} />
                    <Button variant="contained" color="secondary" onClick={() => addToCart(product)}>Adicionar</Button>
                </Product>
            ))}
        </Container>
    )
}

export default Products;