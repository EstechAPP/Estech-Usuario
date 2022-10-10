import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { useTheme } from 'styled-components';
import { CardProfissional } from '../../../components/CardProfissional';
import { CardServicoPreview } from '../../../components/CardServicos';
import PrimaryButton from '../../../components/PrimaryButton';
import AuthContext from '../../../context/user';
import { criarAgendamento } from '../../../services/agenda';
import { IConfirmaAgendamento } from '../../../types/agenda';

import {
 Container,
 AreaTitulo,
 TextoDetalhes,
 TextoEstabelecimento,
 AreaBranca,
 AreaPartes,
 TextoParte,
 TextoResultado,
 AreaButton,
 ViewLoading,
 Loading,
 TextoLoading

} from './styles';

export function ConfirmaAgendamento({route}){
    const navigation = useNavigation();
    const theme = useTheme();
    const {userState} = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    const {dadosAgendamento} : {dadosAgendamento : IConfirmaAgendamento} = route.params;

    function ConfirmaAgenda(){
        setLoading(true);
        criarAgendamento(
            dadosAgendamento.dataAgendamento,
            dadosAgendamento.servico.tempomedio,
            userState.id,
            dadosAgendamento.profissionalSelected.id,
            dadosAgendamento.dadosEmpresa.id,
            dadosAgendamento.servico.id
        ).then(response => {
            console.log(response.data)
            setLoading(false);
            navigation.reset({
                index: 0,
                routes:[{name: 'FimAgendamento'}]
            })
        })
        .catch(err => {
            console.error(err.response)
            setLoading(false);
        })

       
    }


  
return (
   <Container>
    <AreaTitulo>
        <TextoDetalhes>Detalhes do agendamento</TextoDetalhes>
        <TextoEstabelecimento>{dadosAgendamento.dadosEmpresa.nomefantasia}</TextoEstabelecimento>
    </AreaTitulo>
    <AreaBranca>
        <AreaPartes>
            <TextoParte>Profissional</TextoParte>
            <CardProfissional index={0} data={dadosAgendamento.profissionalSelected} />
        </AreaPartes>
        <AreaPartes>
            <TextoParte>Serviço</TextoParte>
            <CardServicoPreview data={dadosAgendamento.servico} />
        </AreaPartes>
        <AreaPartes>
            <TextoParte>Data do agendamento</TextoParte>
            <TextoResultado>
            {moment(dadosAgendamento.dataAgendamento).format('LL')}
            </TextoResultado>
        </AreaPartes>
        <AreaPartes>
            <TextoParte>Horário</TextoParte>
            <TextoResultado>{moment.parseZone(dadosAgendamento.dataAgendamento).local().format("HH:mm")}</TextoResultado>
        </AreaPartes>
        <AreaButton>
            {loading ? 
                <ViewLoading>
                    <Loading color={theme.colors.select_tab}/>
                    <TextoLoading>Realizando agendamento</TextoLoading>
                </ViewLoading>
            :
                <PrimaryButton titulo='Confirmar agendamento' style={{borderRadius: 6}} onPress={ConfirmaAgenda} />
            }
        </AreaButton>
    </AreaBranca>
   </Container>
  );
}