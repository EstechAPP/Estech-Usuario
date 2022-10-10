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
} from './styles';

import moment from 'moment';


export function CardSuaAgenda({dados} : {dados: IAgendamento}){
return (
   <Container>
    <LogoEstabelecimento source={dados.logoEmpresa ? {uri: dados.logoEmpresa} : require('../../../assets/fotobarbearia.png')}  />
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
                {dados.valorServico.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </TextoValor>
        </AreaPreco>
    </AreaInfo>
    <AreaDataAgendamento>
        <TextoData>{moment(dados.dataAgendamento).format('DD/MMM')} {moment(dados.dataAgendamento).format('HH:mm')}</TextoData>
    </AreaDataAgendamento>
   </Container>
  );
}