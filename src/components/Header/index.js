import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, ButtonHome, Logo, ButtonCart, CartIcon } from './HeaderStyles';


const Header = (props) => {
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
        props.clickButton()
    }
    return (
        <Wrapper>
            <ButtonHome onClick={goToHome}>
                <Logo>hortlivery</Logo>
            </ButtonHome>
            <div>
                <ButtonCart onClick={() => props.clickButton()}>
                    <CartIcon fontSize="large"/>
                </ButtonCart>
            </div>
        </Wrapper>
    )   
}

export default Header;