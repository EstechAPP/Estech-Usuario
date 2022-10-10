import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItem, Text } from 'react-native';
import { useTheme } from 'styled-components';
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
  const [refreshing, setRefreshing] = useState(false);
  const {userState} = useContext(AuthContext);
  const theme = useTheme();

  const renderAgenda: ListRenderItem<IAgendamento> = ({item, index}) => (
    <CardSuaAgenda dados={item} />
  );

  useEffect(() => {
    setRefreshing(true);
    getAgendamentosUsuario(userState.id)
    .then(async response => {
      await setAgendamentos(response.data.resultado)
      setRefreshing(false);
    })
    .catch(err => {
      console.error(err.response.data)
      setRefreshing(false);
    })
  }, [])

return (
   <Container>
    <AreaTitulo>
      <Titulo>Sua agenda</Titulo>
    </AreaTitulo>
    {refreshing ? (
      <>
        <ActivityIndicator color={theme.colors.select_tab} />
        <Text style={{textAlign: 'center'}}>Carregando agenda...</Text>
      </>
    ) : (
      <ListaAgenda
        data={agendamentos}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={renderAgenda}
        ListEmptyComponent={(
          <Text>Você não possui agendamento.</Text>
        )}
      />
    )}
   </Container>
  );
}