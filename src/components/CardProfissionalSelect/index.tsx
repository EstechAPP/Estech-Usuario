import React from 'react';
import { IUser } from '../../types/user';

import {
 Container,
 FotoProfissional,
 AreaNomeCargo,
 NomeProfissional,
 Overlay,
 } from './styles';

export function CardProfissionalSelect({data, selected, onPress} : {data : IUser}){
return (
   <Container onPress={onPress} >
        <FotoProfissional source={require("../../../assets/fotobarbearia.png")}  />
        <AreaNomeCargo>
            <NomeProfissional>{data.nome} {data.sobrenome}</NomeProfissional>
        </AreaNomeCargo>
        {selected && <Overlay/>}
   </Container>
  );
}