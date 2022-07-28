import React from 'react';

import {
 Container,
 FotoProfissional,
 AreaNomeCargo,
 NomeProfissional,
 CargoProfissional,
} from './styles';

export function CardProfissional(){
return (
   <Container>
        <FotoProfissional source={require("../../../assets/fotobarbearia.png")}  />
        <AreaNomeCargo>
            <NomeProfissional>Wesley Santos</NomeProfissional>
            <CargoProfissional>Cabeleireiro</CargoProfissional>
        </AreaNomeCargo>
   </Container>
  );
}