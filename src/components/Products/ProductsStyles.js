import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
export const Product = styled.div`
    width: 14rem;
    height: 18rem;
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
   
`
export const Image = styled.img`
    width: 10rem;
    margin-bottom: 1rem;
` 
