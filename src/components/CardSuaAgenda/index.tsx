import React from 'react';
import { IAgendamento } from '../../types/agenda';
import {
 Container,
 LogoEstabelecimento,
 AreaInfo,
 AreaNome,
 TextoNome,
 AreaServico,
 TextoServico,
 AreaPreco,
 TextoPreco,
 TextoValor,
 AreaDataAgendamento,
 TextoData,
 TextoHorario,
} from './styles';

import moment from 'moment';


export function CardSuaAgenda({dados} : {dados: IAgendamento}){
return (
   <Container>
    <LogoEstabelecimento source={require("../../../assets/fotobarbearia.png")}  />
    <AreaInfo>
        <AreaNome>
            <TextoNome numberOfLines={1}>{dados.nomeFantasiaEmpresa}</TextoNome>
        </AreaNome>
        <AreaServico>
            <TextoServico numberOfLines={2}>{dados.nomeServico}</TextoServico>
        </AreaServico>
        <AreaPreco>
            <TextoPreco>
                Total:
            </TextoPreco>
            <TextoValor>
                R$ {dados.valorServico}
            </TextoValor>
        </AreaPreco>
    </AreaInfo>
    <AreaDataAgendamento>
        <TextoData>{moment(dados.dataAgendamento).format('DD/MMM')}</TextoData>
        <TextoHorario>{moment(dados.dataAgendamento).format('HH:mm')}</TextoHorario>
    </AreaDataAgendamento>
   </Container>
  );
}