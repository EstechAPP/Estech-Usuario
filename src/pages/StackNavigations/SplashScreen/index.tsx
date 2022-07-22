import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import {
 Container,
 Logo
} from './styles';

export default function SplashScreen(){
  const navigation = useNavigation();

setTimeout(() => {
  navigation.navigate('TelaInicial')
}, 3000);

return (
   <Container>
    <Logo>Estech</Logo>
   </Container>
  );
}