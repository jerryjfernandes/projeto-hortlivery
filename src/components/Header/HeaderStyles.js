import styled from 'styled-components';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    max-width: 100%;
    height: 5rem;
`
export const ButtonHome = styled.button`
    height: 0.1rem;
    background: none;
    border: none;
    cursor: pointer;
    :focus {
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`

export const Logo = styled.h1`
    font-size: 2rem;
    color: #fff;
    font-family: 'Ultra', serif;
    @media (min-width: 700px) {
        font-size: 3rem;
    }
`
export const ButtonCart = styled.button`
    height: 3rem;
    background: none;
    border: none;
    :focus {
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`
export const CartIcon = styled(ShoppingCartRoundedIcon)`
    color: #fff;
`