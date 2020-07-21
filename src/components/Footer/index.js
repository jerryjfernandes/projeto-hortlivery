import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Contact = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Ultra', serif;
    color: #fff;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    :focus {
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`

const Footer = () => {
    const history = useHistory();

    const goToContact = () => {
        history.push('/contato')
    }
    return (
        <Container>
            <Contact onClick={goToContact}>Contato</Contact>
        </Container>
    )
}

export default Footer;