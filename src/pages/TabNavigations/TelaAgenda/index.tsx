import React from 'react';
import { CardSuaAgenda } from '../../../components/CardSuaAgenda';

import {
 Container,
 AreaTitulo,
 Titulo,
 ListaAgenda,
} from './styles';

export default function TelaAgenda(){

  const dados = [1,2,3]

return (
   <Container>
    <AreaTitulo>
      <Titulo>Sua agenda</Titulo>
    </AreaTitulo>
    <ListaAgenda
      data={dados}
      contentContainerStyle={{alignItems: 'center'}}
      renderItem={() =>
        <CardSuaAgenda/>
      }
    />
   </Container>
  );
}