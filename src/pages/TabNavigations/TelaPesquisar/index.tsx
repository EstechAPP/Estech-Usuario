import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { CustomInput } from '../../../components/CustomInput';

import {
 Container,
 AreaHeader,
 Titulo,
} from './styles';

export default function TelaPesquisar(){
  const theme = useTheme();

return (
   <Container>
    <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <Titulo>Pesquisar</Titulo>
      <CustomInput style={{marginTop: 16}} placeholder='Pesquise o nome do estabelecimento' />
    </AreaHeader>
    
   </Container>
  );
}