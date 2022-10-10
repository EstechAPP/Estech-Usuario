import React, { useEffect, useState } from 'react';
import { CardServicos } from '../../../components/CardServicos';
import { CustomInput } from '../../../components/CustomInput';
import { getServicosEmpresa } from '../../../services/servicos';
import { IEmpresa } from '../../../types/empresa';
import { IServico } from '../../../types/servico';

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

export function TelaTodosServicos({route}){
    const {dadosEmpresa} : {dadosEmpresa : IEmpresa} = route.params;
    const [servicos, setServicos] = useState<IServico[]>([])


  useEffect(() => {

    getServicosEmpresa(dadosEmpresa.id)
    .then(response => {
      setServicos(response.data.resultado)
    })
    .catch(err => {

    })
  
  }, [])
  

return (
   <Container>
    <AreaTitulo>
      <TextoTitulo>Todos serviços</TextoTitulo>
    </AreaTitulo>
    <AreaBranca>
      <CustomInput style={{marginTop: 12}} placeholder="Pesquise nome do serviço"  />
      <AreaTituloServico>
        <TextoServico>Serviços</TextoServico>
        <TextoTotal>Total de {servicos.length} {servicos.length > 1 ? "serviços" : "serviço" }</TextoTotal>
      </AreaTituloServico>
      <ListaServicos
        data={servicos}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item}) => 
          <CardServicos data={item} dadosEmpresa={dadosEmpresa} />
        }
      />

    </AreaBranca>

   </Container>
  );
}