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
    width: 95%;
    background-color: #fcba03;
    borderTopLeftRadius: 25px;
    borderTopRightRadius: 25px;
    border: 3px solid black; 
    
    
     
` 


export const Title = styled.Text`
    color: #fcba03;
    font-size:30px;
    font-weight: 700;
    margin-bottom: 30px;

`

export const Input = styled.TextInput`
    border: 2px solid black; 
    margin-bottom: 20px;
    padding: 15px 30px;
    color: #fcba03;
    font-size: 18px;
    border-radius: 9px;
    width: 75%;
    
    

`
export const  ButtonSubmit = styled.TouchableOpacity`
    border: 2px solid #000;
    padding: 10px 15px;
    
    font-size: 18px;
    border-radius: 9px;
    width: 80%;
    background-color: black;
    align-items: center;
    margin-top: 5%;
`


export const TextSubmit = styled.Text`
    color: #fcba03;
    font-size: 15px;
    font-weight: bold;
`


