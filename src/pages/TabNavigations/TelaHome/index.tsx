import React, { useState } from 'react';
import {StatusBar} from 'react-native'
import { useTheme } from 'styled-components';
import ButtonCategoria, { IButtonCategoria } from '../../../components/ButtonCategoria';
import SobrancelhaSVG from '../../../../assets/icons/categorias/Sobrancelha.svg'
import ManicureSVG from '../../../../assets/icons/categorias/Manicure.svg'
import PedicureSVG from '../../../../assets/icons/categorias/Pedicure.svg'
import CabeleireiroSVG from '../../../../assets/icons/categorias/Cabeleireiro.svg'

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 FotoUsuario,
 AreaCategorias,
 Titulo,
 AreaEstabelecimentos,
 ListaAgenda

} from './styles';
import { ListRenderItem } from 'react-native';

export default function TelaHome(){

  const theme = useTheme();

  const itens = [{
    id: '1',
    icone: (<SobrancelhaSVG/>),
    titulo: 'Sobrancelha'
  },{
    id: '2',
    icone: (<ManicureSVG/>),
    titulo: 'Manicure'
  },{
    id: '3',
    icone: (<PedicureSVG/>),
    titulo: 'Pedicure'
  },{
    id: '4',
    icone: (<CabeleireiroSVG/>),
    titulo: 'Cabeleireiro'
  },{
    id: '5',
    icone: (<CabeleireiroSVG/>),
    titulo: 'Cabeleireiro'
  },]

  const renderItem: ListRenderItem<IButtonCategoria> = ({item, index}) => (
    <ButtonCategoria icone={item.icone} titulo={item.titulo} onPress={() => {}} activeOpacity={0.6} index={index} />
  );

return (
  <Container>
     <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <AreaMensagemNome>
        <TextoMensagem>Bem vindo,</TextoMensagem>
        <TextoNome>Matheus Pereira</TextoNome>
      </AreaMensagemNome>
      <FotoUsuario source={{uri: 'https://i.pravatar.cc/'}}/>
    </AreaHeader>
    <AreaCategorias>
      <Titulo>Categorias</Titulo>
      <ListaAgenda
        data={itens}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </AreaCategorias>
    <AreaEstabelecimentos>
      <Titulo>Establecimentos populares</Titulo>

    </AreaEstabelecimentos>
   </Container>
  );
}