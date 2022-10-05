import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { CardProfissional } from '../../../components/CardProfissional';
import { CardServicoPreview } from '../../../components/CardServicos';
import PrimaryButton from '../../../components/PrimaryButton';
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
    const [loading, setLoading] = useState(false);

    const {dadosAgendamento} : {dadosAgendamento : IConfirmaAgendamento} = route.params;

    function ConfirmaAgenda(){
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('FimAgendamento');
            setLoading(false);
        }, 2000);
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
            <CardProfissional data={dadosAgendamento.profissionalSelected} />
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
            <TextoResultado>{moment(dadosAgendamento.dataAgendamento).format('HH:mm')}</TextoResultado>
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