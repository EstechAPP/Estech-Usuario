import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { CardSuaAgenda } from '../../../components/CardSuaAgenda';
import AuthContext from '../../../context/user';
import { getAgendamentosUsuario } from '../../../services/agenda';
import { getDadosEmpresa } from '../../../services/empresa';
import { getDadosServico } from '../../../services/servicos';
import { IAgendamento } from '../../../types/agenda';

import {
 Container,
 AreaTitulo,
 Titulo,
 ListaAgenda,
} from './styles';

export default function TelaAgenda(){

  const [agendamentos,setAgendamentos] = useState<IAgendamento[]>([]);
  const {userState} = useContext(AuthContext);

  const renderAgenda: ListRenderItem<IAgendamento> = ({item, index}) => (
    <CardSuaAgenda dados={item} />
  );



  useEffect(() => {
    getAgendamentosUsuario(userState.id)
    .then(async response => {
      await setAgendamentos(response.data.resultado)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

return (
   <Container>
    <AreaTitulo>
      <Titulo>Sua agenda</Titulo>
    </AreaTitulo>
    <ListaAgenda
      data={agendamentos}
      contentContainerStyle={{alignItems: 'center'}}
      renderItem={renderAgenda}
    />
   </Container>
  );
}