import React from 'react';

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

export function CardSuaAgenda(){
return (
   <Container>
    <LogoEstabelecimento source={require("../../../assets/fotobarbearia.png")}  />
    <AreaInfo>
        <AreaNome>
            <TextoNome numberOfLines={1}>Hugo Barbearia Hugo Barbearia Hugo Barbearia Hugo Barbearia </TextoNome>
        </AreaNome>
        <AreaServico>
            <TextoServico numberOfLines={2}>Corte Degradê / Barba / Sobrancelha / Teste / Navalhado / Depilação / Navalhado / Depilação</TextoServico>
        </AreaServico>
        <AreaPreco>
            <TextoPreco>
                Total:
            </TextoPreco>
            <TextoValor>
                R$ 120,00
            </TextoValor>
        </AreaPreco>
    </AreaInfo>
    <AreaDataAgendamento>
        <TextoData>01/Set</TextoData>
        <TextoHorario>09:00</TextoHorario>
    </AreaDataAgendamento>
   </Container>
  );
}