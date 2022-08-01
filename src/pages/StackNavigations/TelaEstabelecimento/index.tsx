import React from 'react';

import {
 Container,
 Header,
 FotoEstabelecimento,
 NomeEstabelecimento,
 AreaStatusHora,
 ComponenteStatus,
 PontoStatus,
 TextoStatus,
 ComponenteHorario,
 TextoHorario,
 BackgroundEstabelecimento,
 Titulo,
 Separador,
 AreaProfissionais,
} from './styles';

import DespertadorSVG from '../../../../assets/icons/despertador.svg'

export function TelaEstabelecimento(){
return (
   <Container>
    <BackgroundEstabelecimento/>
    <Header>
        <FotoEstabelecimento source={require("../../../../assets/fotobarbearia.png")}/>
        <NomeEstabelecimento>Hugo Barbearia</NomeEstabelecimento>
        <AreaStatusHora>
            <ComponenteStatus>
                <PontoStatus/>
                <TextoStatus>Fechado</TextoStatus>
            </ComponenteStatus>
            <ComponenteHorario>
                <DespertadorSVG/>
                <TextoHorario>08:00 as 18:00</TextoHorario>
            </ComponenteHorario>
        </AreaStatusHora>
    </Header>
    <Separador/>
    <AreaProfissionais>
        <Titulo>Profissionais</Titulo>
    </AreaProfissionais>

   </Container>
  );
}