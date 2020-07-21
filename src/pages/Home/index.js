import React, { useState, useReducer } from 'react';
import Header from '../../components/Header';
import Products from '../../components/Products';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import CartContext from '../../contexts/CartContext';
import { initialState, storeReducer } from '../../reducers/store';
import { Container, Main } from './HomeStyles';


const Home = () => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const [initialPage, setInitialPage] = useState(0);

    const cartPage = () => {
        if(initialPage === 0) {
            setInitialPage(1);
        }
        
        if(initialPage === 1) {
            setInitialPage(0)
        }
    }
    
    return (
        <CartContext.Provider value={{cart:state.cart, dispatch: dispatch}}>
            <Container>
                <Header clickButton={cartPage}/>
                <Main>
                    {initialPage === 0 ? <Products /> : <Cart />}
                </Main>
                <Footer />
            </Container>
        </CartContext.Provider>
    )
}

export default Home;