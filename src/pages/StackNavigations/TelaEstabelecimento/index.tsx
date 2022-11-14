import React, { useEffect, useState } from 'react';

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
 ListaProfissionais,
 AreaServicos,
 ListaServicos,
 AreaTituloVerTudo,
 TouchVerTudo,
 TextoVerTudo,

} from './styles';

import DespertadorSVG from '../../../../assets/icons/despertador.svg'
import { CardProfissional } from '../../../components/CardProfissional';
import { CardServicos } from '../../../components/CardServicos';
import { useNavigation } from '@react-navigation/native';
import { getDadosEmpresa, getFuncionariosEmpresa } from '../../../services/empresa';
import axios from 'axios';
import { getServicosEmpresa } from '../../../services/servicos';
import { IServico } from '../../../types/servico';
import { IEmpresa } from '../../../types/empresa';
import moment from 'moment';
import { useTheme } from 'styled-components';
import { IUser } from '../../../types/user';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SpinnerLoading } from '../../../components/SpinnerLoading';

export function TelaEstabelecimento({route}){

    const {idEmpresa} = route.params;
    const navigation = useNavigation();
    const theme = useTheme();


    const requisicaoum = getDadosEmpresa(idEmpresa);
    const requisicaodois = getServicosEmpresa(idEmpresa);
    const requisicaoTres = getFuncionariosEmpresa(idEmpresa);

    const [visible, setVisible] = useState(false);
    const [dadosEmpresa, setDadosEmpresa] = useState<IEmpresa>();
    const [listaServicos, setListaServicos] = useState<IServico[]>([]);
    const [listaFuncionarios, setListaFuncionarios] = useState<IUser[]>([]);

    function openClosed(){
        const dataHoje = new Date();
        const dataInicioPadrao = "08:00"
        const dataFimPadrao = "20:00"
        const dataInicioSplit = dadosEmpresa ? dadosEmpresa.horasFuncionamentoInicio.split(':') : dataInicioPadrao.split(':');
        const dataFimSplit = dadosEmpresa ? dadosEmpresa.horasFuncionamentoFim.split(':') : dataFimPadrao.split(':');

        const dataInicioTratado = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate(), Number(dataInicioSplit[0]), Number(dataInicioSplit[1]), 0)
        const dataFimTratado = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate(), Number(dataFimSplit[0]), Number(dataFimSplit[1]), 0)

        if(moment(dataHoje).isAfter(dataInicioTratado) && moment(dataHoje).isBefore(dataFimTratado)){
            return true;
        }
        else {
            return false;
        }
    }


    useEffect(() => {
        setVisible(true);
        axios.all([requisicaoum, requisicaodois, requisicaoTres])
        .then(
        axios.spread((...responses) => {
            const responseum = responses[0].data.resultado;
            const responsedois = responses[1].data.resultado;
            const responsetres = responses[2].data.resultado;
            setDadosEmpresa(responseum)
            setListaServicos(responsedois)
            setListaFuncionarios(responsetres)
            setVisible(false);
        }))
        .catch(errors => {
            console.error(errors);
            setVisible(false);
        })
    }, [])

return (
   <Container>
    <Spinner visible={visible} customIndicator={(
       <SpinnerLoading titulo='Carregando...' />
    )}  />
    <BackgroundEstabelecimento source={{uri: dadosEmpresa?.imgCapa_fisico}}/>
    <Header>
        <FotoEstabelecimento source={{uri: dadosEmpresa?.imgLogo_fisico}}/>
        <NomeEstabelecimento>{dadosEmpresa?.nomefantasia}</NomeEstabelecimento>
        <AreaStatusHora>
{            openClosed() ? (
            <ComponenteStatus>
                <PontoStatus color={theme.colors.verde_open} />
                <TextoStatus>Aberto</TextoStatus>
            </ComponenteStatus>
): (
            <ComponenteStatus>
                <PontoStatus color={theme.colors.vermelho_closed} />
                <TextoStatus>Fechado</TextoStatus>
            </ComponenteStatus>
)}
            <ComponenteHorario>
                <DespertadorSVG/>
                <TextoHorario>{dadosEmpresa?.horasFuncionamentoInicio} as {dadosEmpresa?.horasFuncionamentoFim}</TextoHorario>
            </ComponenteHorario>
        </AreaStatusHora>
    </Header>
    <Separador/>
    <AreaProfissionais>
        <Titulo>Profissionais</Titulo>
        <ListaProfissionais
        data={listaFuncionarios}
        renderItem={({item}) => 
            <CardProfissional data={item} />
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        />

    </AreaProfissionais>
    <AreaServicos>
        <AreaTituloVerTudo>
            <Titulo>Serviços populares</Titulo>
            <TouchVerTudo onPress={() => navigation.navigate('TelaTodosServicos', {dadosEmpresa})} >
                <TextoVerTudo>ver tudo</TextoVerTudo>
            </TouchVerTudo>
        </AreaTituloVerTudo>
        <ListaServicos
        data={listaServicos}
        renderItem={({item}) => 
            <CardServicos data={item} dadosEmpresa={dadosEmpresa} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        />
    </AreaServicos>

   </Container>
  );
}