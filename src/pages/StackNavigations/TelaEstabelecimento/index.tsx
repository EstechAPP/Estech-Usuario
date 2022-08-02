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

export function TelaEstabelecimento(){

    const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const navigation = useNavigation();

return (
   <Container>
    <BackgroundEstabelecimento source={require("../../../../assets/fotobarbearia.png")}/>
    <Header>
        <FotoEstabelecimento source={require("../../../../assets/fotobarbearia.png")}/>
        <NomeEstabelecimento>Hugo Barbearia</NomeEstabelecimento>
        <AreaStatusHora>
            <ComponenteStatus>
                <PontoStatus/>
                <TextoStatus>Aberto</TextoStatus>
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
        <ListaProfissionais
        data={dados}
        renderItem={() => 
            <CardProfissional/>
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        />

    </AreaProfissionais>
    <AreaServicos>
        <AreaTituloVerTudo>
            <Titulo>Serviços populares</Titulo>
            <TouchVerTudo onPress={() => navigation.navigate('TelaTodosServicos')} >
                <TextoVerTudo>ver tudo</TextoVerTudo>
            </TouchVerTudo>
        </AreaTituloVerTudo>
        <ListaServicos
        data={dados}
        renderItem={() => 
            <CardServicos/>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        />
    </AreaServicos>

   </Container>
  );
}