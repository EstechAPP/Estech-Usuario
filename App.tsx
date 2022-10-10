import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import RoutesNavigator from './src/routes/RoutesNavigation';
import { NavigationContainer } from '@react-navigation/native';
import GlobalContext from './src/context';

import moment from 'moment';
import 'moment/min/locales';
import { LogBox } from 'react-native';



export default function App(){

  moment.locale('pt-br');
  LogBox.ignoreLogs(
    ['Non-serializable values']
  )

return (
  <ThemeProvider theme={theme} >
    <NavigationContainer>
      <GlobalContext>
        <RoutesNavigator/>
      </GlobalContext>
    </NavigationContainer>
  </ThemeProvider>
  );
}