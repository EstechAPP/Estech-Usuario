import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { Alert, Modal } from 'react-native';
import { postCancelarAgendamento, postFinalizarAgendamento } from '../../services/agenda';
import { IAgendamento } from '../../types/agenda';
import { IAgendaServicoUsuario } from '../../types/AgendaServicoUsuario';

import {
 Container,
 AreaFotoCliente,
 FotoCliente,
 AreaInformacoes,
 NomeCliente,
 HorarioAgendamento,
 DetalhesAgendamento,
 CancelarAgendamento,
 AreaInfo,
 ValorHorario,
 TouchDetalhes,
 TouchCancelarFinalizar
} from './styles';

export function CardSuaAgenda({item, index, attlista, idUsuario} : {item: IAgendamento, index: number, attlista?: () => void, idUsuario: number}){

    const navigation = useNavigation();

    function CancelaAgendamento(){
        Alert.alert('Cancelar agendamento', "Deseja cancelar o agendamento?", [
            {
                text: 'Sim',
                onPress: () => { 
                    postCancelarAgendamento(item.id, idUsuario)
                    .then(response => {
                        Alert.alert(response.data.mensagem);
                        attlista();
                    })
                    .catch(err => {
                        Alert.alert("Tivemos um problema em processar sua requisição", err.data.mensagem);
                    })
                },
                style: "default"
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ] )
    }



return (
   <Container index={index}>
        <AreaFotoCliente>
            <FotoCliente source={item.empresaAgenda.imgLogo_fisico ? {uri: item.empresaAgenda.imgLogo_fisico} : require('../../../assets/no-profile-icon.png')}/>
        </AreaFotoCliente>
        <AreaInformacoes>
            <AreaInfo>
                <NomeCliente>{item.empresaAgenda.nomefantasia}</NomeCliente>
            </AreaInfo>
            <AreaInfo>
                <HorarioAgendamento>Data: </HorarioAgendamento>
                <ValorHorario>{moment(item.dataAgendamento).calendar()}</ValorHorario>
            </AreaInfo>
            <TouchDetalhes onPress={() => navigation.navigate("ModalDetalhes", {dados: item})}>
                <DetalhesAgendamento>Detalhes do Agendamento</DetalhesAgendamento>
            </TouchDetalhes>
            <TouchCancelarFinalizar onPress={CancelaAgendamento}>
                <CancelarAgendamento>Cancelar Agendamento</CancelarAgendamento>
            </TouchCancelarFinalizar>
        </AreaInformacoes>
   </Container>
  );
}