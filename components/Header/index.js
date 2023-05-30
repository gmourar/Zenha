import React from 'react';
import { Image } from 'react-native';
import { Container } from './style'
import  Logo  from '../../assets/logo.png';
import * as Animatable from 'react-native-animatable';


Animatable.initializeRegistryWithDefinitions({
    FlipInY: {
      from: { rotateY: '100deg' },
      to: { rotateY: '0deg' },
    },
  });


function Header() {
    return(
        <Container>
            <Animatable.Image
                animation= "FlipInY"

                source={ Logo }
                
            />

        </Container>


    )

}


export default Header;
