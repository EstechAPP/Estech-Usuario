import React from 'react';

import {
 Container,
 FotoEstabelecimento,
 Foto,
 AreaPontuacao,
 TextoPontuacao,
 TextoNomeEstabelecimento,
 AreaStatusHora,
 ComponenteStatus,
 PontoStatus,
 TextoStatus,
 ComponenteHorario,
 TextoHorario,
} from './styles';

import EstrelaSVG from '../../../assets/icons/estrela.svg';
import DespertadorSVG from '../../../assets/icons/despertador.svg';
import { useNavigation } from '@react-navigation/native';

export function CardEstabelecimento(){
    const navigation = useNavigation();

return (
   <Container onPress={() => {navigation.navigate('TelaEstabelecimento')}}>
    <FotoEstabelecimento source={require("../../../assets/fotobarbearia.png")}>
        <AreaPontuacao>
            <EstrelaSVG/>
            <TextoPontuacao>3.2</TextoPontuacao>
        </AreaPontuacao>
    </FotoEstabelecimento>
    <TextoNomeEstabelecimento numberOfLines={1}>DON VICTOR BARBERSHOP</TextoNomeEstabelecimento>
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
   </Container>
  );
}