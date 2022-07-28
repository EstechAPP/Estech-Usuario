import React, { useState } from 'react';
import {StatusBar} from 'react-native'
import { useTheme } from 'styled-components';

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 FotoUsuario,
 AreaCategorias,
 Titulo,
 AreaEstabelecimentos,
 ListaAgenda

} from './styles';

export default function TelaHome(){

  const theme = useTheme();


return (
  <Container>
     <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <AreaMensagemNome>
        <TextoMensagem>Bem vindo,</TextoMensagem>
        <TextoNome>Matheus Pereira</TextoNome>
      </AreaMensagemNome>
      <FotoUsuario source={{uri: 'https://i.pravatar.cc/'}}/>
    </AreaHeader>
    <AreaCategorias>
      <Titulo>Categorias</Titulo>
      <ListaAgenda
        
      />
    </AreaCategorias>
    <AreaEstabelecimentos>
      <Titulo>Establecimentos populares</Titulo>

    </AreaEstabelecimentos>
   </Container>
  );
}