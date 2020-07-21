import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

export const Container = styled.div`
    width: 80%;
    min-height: 30rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 1rem;
    margin-bottom: 1rem;
`
export const Title = styled.h2`
    color: #ad1457;
`

export const CartItem = styled(Chip)`
    margin: 0.5rem 0;
`