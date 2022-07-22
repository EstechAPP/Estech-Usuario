import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import RoutesNavigator from './src/routes/RoutesNavigation';
import { NavigationContainer } from '@react-navigation/native';



export default function App(){
return (
  <ThemeProvider theme={theme} >
    <NavigationContainer>
      <RoutesNavigator/>
    </NavigationContainer>
  </ThemeProvider>
  );
}