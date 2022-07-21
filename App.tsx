import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import SplashScreen from './src/pages/SplashScreen';
import TelaLogin from './src/pages/TelaLogin';
import TelaInicial from './src/pages/TelaInicial';



export default function App(){
return (
  <ThemeProvider theme={theme} >
    <TelaLogin/>
  </ThemeProvider>
  );
}