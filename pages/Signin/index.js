import React, { useState } from 'react';
import { KeyboardView, Container, Title, Input, ButtonSubmit, TextSubmit } from './style';
import Header from '../../components/Header';


function Signin() {
  const [isLoginValidated, setIsLoginValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Valores esperados para usuário e senha
    const useresperado = 'zenha';
    const passesperado = 'adminz';

   
    if (username === useresperado && password === passesperado) {
     
      window.alert('Bem-vindo: Admin');
      
    } else {
      
      window.alert('Usuário e/ou Senha Inválido(s).');
    }
  };

  return (
    <KeyboardView>
      <Header />
      <Container>
        

        <Input
          name="username"
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Input
          name="password"
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonSubmit onPress={handleLogin}>
          <TextSubmit>Entrar</TextSubmit>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Signin;
