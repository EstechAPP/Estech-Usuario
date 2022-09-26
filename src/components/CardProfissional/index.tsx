import React from 'react';
import { IUser } from '../../types/user';

import {
 Container,
 FotoProfissional,
 AreaNomeCargo,
 NomeProfissional,
 CargoProfissional,
} from './styles';

export function CardProfissional({data} : {data : IUser}){
return (
   <Container>
        <FotoProfissional source={require("../../../assets/fotobarbearia.png")}  />
        <AreaNomeCargo>
            <NomeProfissional>{data.nome} {data.sobrenome}</NomeProfissional>
        </AreaNomeCargo>
   </Container>
  );
}