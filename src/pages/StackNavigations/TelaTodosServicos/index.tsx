import React from 'react';
import { CardServicos } from '../../../components/CardServicos';
import { CustomInput } from '../../../components/CustomInput';

import {
 Container,
 AreaTitulo,
 TextoTitulo,
 AreaBranca,
 AreaTituloServico,
 TextoServico,
 TextoTotal,
 ListaServicos,


} from './styles';

export function TelaTodosServicos(){
  const dados = [ 1,2,3,4,5,6,7,8,9,10]

return (
   <Container>
    <AreaTitulo>
      <TextoTitulo>Todos serviços</TextoTitulo>
    </AreaTitulo>
    <AreaBranca>
      <CustomInput style={{marginTop: 12}} placeholder="Pesquise nome do serviço" />
      <AreaTituloServico>
        <TextoServico>Serviços</TextoServico>
        <TextoTotal>Total de 12 serviços</TextoTotal>
      </AreaTituloServico>
      <ListaServicos
        data={dados}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={() => 
          <CardServicos />
        }
      />

    </AreaBranca>

   </Container>
  );
}