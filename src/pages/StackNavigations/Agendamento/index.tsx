import { useNavigation } from '@react-navigation/native';
import React, {useEffect}from 'react';
import { Calendar } from 'react-native-calendars';
import { CardProfissional } from '../../../components/CardProfissional';
import { CardServicoPreview, CardServicos } from '../../../components/CardServicos';
import PrimaryButton from '../../../components/PrimaryButton';
import { API } from '../../../services/api';
import { IEmpresa } from '../../../types/empresa';
import { Titulo } from '../TelaEstabelecimento/styles';

import {
 Container,
 AreaTituloTela,
 TituloAgendamento,
 TituloEstabelecimento,
 AreaBranca,
 AreaServico,
 TituloServico,
 AreaProfissional,
 TituloEscolha,
 ListaProfissionais,
 AreaCalendario,
 TituloData,
 AreaBotao,
 AreaHorarios,
 TituloHorario,
 ListaHorarios,
 ViewHorario,
 TextoHorario,


} from './styles';

export function Agendamento({route}){
  const {servico} = route.params;
  const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const 
  const navigation = useNavigation();
  console.log(servico)
return (
   <Container>
    <AreaTituloTela>
      <TituloAgendamento>Agendamento</TituloAgendamento>
      <TituloEstabelecimento>{dadosEmpresa.nomefantasia}</TituloEstabelecimento>
    </AreaTituloTela>
    <AreaBranca>
      <AreaServico>
        <TituloServico>Serviço escolhido</TituloServico>
        <CardServicoPreview data={servico}/>
      </AreaServico>
      <AreaProfissional>
        <TituloEscolha>Escolha o profissional</TituloEscolha>
        {/* <ListaProfissionais
          data={dados}
          renderItem={() => 
            <CardProfissional/>
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
      </AreaProfissional>
      <AreaCalendario>
        <TituloData>Escolha a data</TituloData>
        <Calendar/>
      </AreaCalendario>
      <AreaHorarios>
          <TituloHorario>Horários Disponíveis</TituloHorario>
          <ListaHorarios
            data={dados}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => 
              <ViewHorario>
                <TextoHorario>11:00</TextoHorario>
              </ViewHorario>
            }
          />
      </AreaHorarios>
    </AreaBranca>
    <AreaBotao>
      <PrimaryButton titulo='Realizar agendamento' style={{borderRadius: 6}}  onPress={() => navigation.navigate('ConfirmaAgendamento')}/>
    </AreaBotao>

   </Container>
  );
}