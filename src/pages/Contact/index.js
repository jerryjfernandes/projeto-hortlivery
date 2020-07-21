import React from 'react';
import Header from '../../components/Header';
import { useHistory } from 'react-router-dom';
import { Container, ContactWrapper, Title, Form } from './ContactStyles';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));


const Contact = () => {
    const classes = useStyles();
    const history = useHistory();

    const homePage = () => {
        history.push('/')
    }

    const sendMail = () => {
        alert("Mensagem enviada! :)")
        window.location.reload()
    }

    return (
        <Container>
            <Header clickButton={homePage}/>
            <ContactWrapper>
                <Title>Contato</Title>
                <Form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Nome" variant="outlined" color="secondary" />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" color="secondary" />
                    <TextField id="outlined-basic" label="Telefone" variant="outlined" color="secondary" />
                    <TextField id="outlined-basic" label="Mensagem" variant="outlined" color="secondary" />
                    <Button variant="contained" color="secondary" onClick={sendMail} >Enviar</Button>
                </Form>
            </ContactWrapper>
        </Container>
    )
}

export default Contact;