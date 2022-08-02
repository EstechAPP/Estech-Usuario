import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
} from './styles';

export function ConfirmaAgendamento(){
    const navigation = useNavigation();
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
            <PrimaryButton titulo='Confirmar agendamento' style={{borderRadius: 6}} onPress={() => navigation.navigate('FimAgendamento')} />
        </AreaButton>
    </AreaBranca>

   </Container>
  );
}