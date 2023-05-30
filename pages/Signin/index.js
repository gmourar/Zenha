import React from 'react';
import { KeyboardView , Container,  Title , Input , ButtonSubmit , TextSubmit} from './style';
import Header from '../../components/Header';





function Signin() {
    return(
        <KeyboardView>
            <Header />
            <Container> 
                <Title>Login</Title>
                
                <Input placeholder="Usuário"/>

                <Input placeholder="Senha" secureTextEntry/>
                <ButtonSubmit>
                   <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>


    )
}

export default Signin;