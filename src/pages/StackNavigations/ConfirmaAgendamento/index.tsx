import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { CardProfissional } from '../../../components/CardProfissional';
import { CardServicos } from '../../../components/CardServicos';
import PrimaryButton from '../../../components/PrimaryButton';

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

export function ConfirmaAgendamento(){
    const navigation = useNavigation();
    const theme = useTheme();
    const [loading, setLoading] = useState(false);

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
        <TextoEstabelecimento>Hugo Barbearia</TextoEstabelecimento>
    </AreaTitulo>
    <AreaBranca>
        <AreaPartes>
            <TextoParte>Profissional</TextoParte>
            <CardProfissional/>
        </AreaPartes>
        <AreaPartes>
            <TextoParte>Serviço</TextoParte>
            <CardServicos/>
        </AreaPartes>
        <AreaPartes>
            <TextoParte>Data do agendamento</TextoParte>
            <TextoResultado>20 de agosto de 2022 (Terça-feira)</TextoResultado>
        </AreaPartes>
        <AreaPartes>
            <TextoParte>Horário</TextoParte>
            <TextoResultado>12:30</TextoResultado>
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