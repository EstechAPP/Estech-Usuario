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


import DespertadorSVG from '../../../assets/icons/despertador.svg';
import { useNavigation } from '@react-navigation/native';
import { IEmpresaCard } from '../../types/empresa';
import { useTheme } from 'styled-components';
import moment from 'moment';

export function CardEstabelecimento({dados} : IEmpresaCard){
    const navigation = useNavigation();
    const theme = useTheme();
    
    function openClosed(){
        const dataHoje = new Date();
        const dataInicioSplit = dados.horasFuncionamentoInicio.split(':');
        const dataFimSplit = dados.horasFuncionamentoFim.split(':');

        const dataInicioTratado = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate(), Number(dataInicioSplit[0]), Number(dataInicioSplit[1]), 0)
        const dataFimTratado = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate(), Number(dataFimSplit[0]), Number(dataFimSplit[1]), 0)

        if(moment(dataHoje).isAfter(dataInicioTratado) && moment(dataHoje).isBefore(dataFimTratado)){
            return true;
        }
        else {
            return false;
        }
    }

return (
   <Container onPress={() => {navigation.navigate('TelaEstabelecimento', {idEmpresa: dados.id})}}>
    <FotoEstabelecimento source={ dados.imgCapa_fisico ? {uri: dados.imgCapa_fisico} : require('../../../assets/Image_not_available.png')}>
        {/* <AreaPontuacao>
            <EstrelaSVG/>
            <TextoPontuacao>3.2</TextoPontuacao>
        </AreaPontuacao> */}
    </FotoEstabelecimento>
    <TextoNomeEstabelecimento numberOfLines={1}>{dados.nomefantasia}</TextoNomeEstabelecimento>
    <AreaStatusHora>
        {openClosed() ? (
            <ComponenteStatus>
                <PontoStatus color={theme.colors.verde_open}/>
                <TextoStatus>Aberto</TextoStatus>
            </ComponenteStatus>
        ) : (
            <ComponenteStatus>
                <PontoStatus color={theme.colors.vermelho_closed}/>
                <TextoStatus>Fechado</TextoStatus>
            </ComponenteStatus>
        )}
        <ComponenteHorario>
            <DespertadorSVG/>
            <TextoHorario>{dados.horasFuncionamentoInicio} as {dados.horasFuncionamentoFim}</TextoHorario>
        </ComponenteHorario>
    </AreaStatusHora>
   </Container>
  );
}