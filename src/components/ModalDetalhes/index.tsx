import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme';
import { IAgendamento } from '../../types/agenda';
import {
  AreaHeader,
  Container,
  TextoNome,
  AreaPreviewCliente,
  ImagemPreview,
  NomeCliente,
  Label,
  AreaDetalhes,
  TituloDetalhes,
  AreaInfoDetalhes,
  TextoTitulo,
  TextoResposta,
  AreaConfirmadoFinalizado,
  DadoConfirmadoFinalizado,
  TituloConfirmadoFinalizado,
  RespostaTituloConfirmadoFinalizado,
  TextoHoraAgendamento,
  TituloHoraAgendamento

} from './styles';

export function ModalDetalhes({route}){
  const {dados} : {dados : IAgendamento} = route.params;
  const navigation = useNavigation();

return (
  <Container>
    <AreaHeader>
        <TextoNome numberOfLines={1}>Detalhes agendamento</TextoNome>
        <Icon name='close' size={26} color={theme.colors.select_tab} onPress={() => navigation.goBack()} />
    </AreaHeader>
    <AreaPreviewCliente>
      <ImagemPreview source={ dados.empresaAgenda.imgLogo_fisico ? {uri: dados.empresaAgenda.imgLogo_fisico}  : require('../../../assets/no-profile-icon.png')}/>
      <Label>Cliente</Label>
      <NomeCliente>{dados.empresaAgenda.nomefantasia}</NomeCliente>
      {/* <TextoResposta>{dados.celularCliente}</TextoResposta> */}
      <TituloHoraAgendamento>Horário do agendamento</TituloHoraAgendamento>
      <TextoHoraAgendamento>{moment(dados.dataAgendamento).calendar()}</TextoHoraAgendamento>
    </AreaPreviewCliente>
    <AreaConfirmadoFinalizado>
      <DadoConfirmadoFinalizado>
        <TituloConfirmadoFinalizado>Status Agendamento</TituloConfirmadoFinalizado>
        <RespostaTituloConfirmadoFinalizado>{dados.confirmado ? "Confirmado" : dados.confirmado == null ? "Pendente" : "Recusado"}</RespostaTituloConfirmadoFinalizado>
      </DadoConfirmadoFinalizado>
      <DadoConfirmadoFinalizado>
        <TituloConfirmadoFinalizado>Serviço Finalizado</TituloConfirmadoFinalizado>
        <RespostaTituloConfirmadoFinalizado>{dados.servicoFinalizado ? "Finalizado" : "Em aberto"}</RespostaTituloConfirmadoFinalizado>
      </DadoConfirmadoFinalizado>
    </AreaConfirmadoFinalizado>
    {/* <AreaDetalhes>
      <TituloDetalhes>Informações do serviço</TituloDetalhes>
      <AreaInfoDetalhes>
        <TextoTitulo>Descrição Serviço: </TextoTitulo>
        <TextoResposta>{dados.nomeServico}</TextoResposta>
      </AreaInfoDetalhes>
      <AreaInfoDetalhes>
        <TextoTitulo>Tempo médio para realizar o serviço: </TextoTitulo>
        <TextoResposta>{dados.tempoeMedioServico}</TextoResposta>
      </AreaInfoDetalhes>
    </AreaDetalhes> */}
   </Container>
  );
}