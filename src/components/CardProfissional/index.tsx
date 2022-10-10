import React from 'react';
import { IUser } from '../../types/user';

import {
 Container,
 FotoProfissional,
 AreaNomeCargo,
 NomeProfissional,
 CargoProfissional,
} from './styles';

export function CardProfissional({data, index} : {data : IUser, index : number}){
return (
   <Container index={index}>
        <FotoProfissional  source={data.foto_base64 ? {uri: data.foto_base64} : require('../../../assets/fotobarbearia.png')}  />
        <AreaNomeCargo>
            <NomeProfissional>{data.nome} {data.sobrenome}</NomeProfissional>
        </AreaNomeCargo>
   </Container>
  );
}