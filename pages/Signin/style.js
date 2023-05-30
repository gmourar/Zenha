import styled from 'styled-components/native';
import Signin from '.';


export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content:center;
    background-color: #fcba03;

`
export const Container = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    width: 90%;
    
     
` 


export const Title = styled.Text`
    color: black;
    font-size:30px;
    font-weight: 700;
    margin-bottom: 30px;

`

export const Input = styled.TextInput`
    border: 2px solid #000; 
    margin-bottom: 20px;
    padding: 15px 30px;
    color: #000;
    font-size: 18px;
    border-radius: 9px;
    width: 90%;

    

`
export const  ButtonSubmit = styled.TouchableOpacity`
    border: 2px solid #000;
    padding: 10px 15px;
    
    font-size: 18px;
    border-radius: 9px;
    width: 90%;
    background-color: #000;
    align-items: center;
    
`


export const TextSubmit = styled.Text`
    color: #fcba03;
    font-size: 15px;
    font-wex'ight: bold;
`


