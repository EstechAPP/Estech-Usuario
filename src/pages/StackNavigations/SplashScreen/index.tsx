import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import {
 Container,
 Logo
} from './styles';

export default function SplashScreen(){
  const navigation = useNavigation();
  const theme = useTheme();

setTimeout(() => {
  navigation.navigate('TelaInicial')
}, 3000);

return (
   <Container>
    <StatusBar backgroundColor={theme.colors.background_bege} barStyle={'dark-content'} />
    <Logo>Estech</Logo>
   </Container>
  );
}