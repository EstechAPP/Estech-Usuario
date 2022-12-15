import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme';
import { IAgendamento } from '../../types/agenda';
import { CardProfissional } from '../CardProfissional';
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
  TituloHoraAgendamento,
  AreaProfissional,
  TituloAreas

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
    <AreaProfissional>
      <TituloAreas>Serviço será executado por</TituloAreas>
      <CardProfissional data={dados.usuarioFuncionario} index={0} />
    </AreaProfissional>
    <AreaProfissional>
      <TituloAreas>Informações sobre o serviço</TituloAreas>
      <Text>Descrição: {dados.servicoAgenda.descricao}</Text>
      <Text>Valor: {dados.servicoAgenda.preco}</Text>
    </AreaProfissional>
    <AreaProfissional>
      <TituloAreas>Informações sobre a localização</TituloAreas>
      <Text>Endereço: <Text>{dados.empresaAgenda.logradouro}, {dados.empresaAgenda.numero}</Text></Text>
      <Text>Bairro: <Text>{dados.empresaAgenda.bairro}</Text></Text>
      <Text>Cidade: <Text>{dados.empresaAgenda.cidade} - {dados.empresaAgenda.uf}</Text></Text>
    </AreaProfissional>
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