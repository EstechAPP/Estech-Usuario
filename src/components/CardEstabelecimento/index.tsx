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
import { IEmpresa, IEmpresaCard } from '../../types/empresa';

export function CardEstabelecimento({dados} : IEmpresaCard){
    const navigation = useNavigation();

return (
   <Container onPress={() => {navigation.navigate('TelaEstabelecimento')}}>
    <FotoEstabelecimento source={require("../../../assets/fotobarbearia.png")}>
        <AreaPontuacao>
            <EstrelaSVG/>
            <TextoPontuacao>3.2</TextoPontuacao>
        </AreaPontuacao>
    </FotoEstabelecimento>
    <TextoNomeEstabelecimento numberOfLines={1}>{dados.nomefantasia}</TextoNomeEstabelecimento>
    <AreaStatusHora>
        <ComponenteStatus>
            <PontoStatus/>
            <TextoStatus>Fechado</TextoStatus>
        </ComponenteStatus>
        <ComponenteHorario>
            <DespertadorSVG/>
            <TextoHorario>{dados.horasFuncionamentoInicio} as {dados.horasFuncionamentoFim}</TextoHorario>
        </ComponenteHorario>
    </AreaStatusHora>
   </Container>
  );
}