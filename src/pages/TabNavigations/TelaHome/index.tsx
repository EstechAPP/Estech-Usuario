import React, { ComponentProps, useContext, useEffect, useState } from 'react';
import {Alert, StatusBar} from 'react-native'
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
 ListaAgenda,
 SubTitulo,
 AreaProfissionais,
 AreaMapaEstabelecimentos,


} from './styles';
import { ListRenderItem } from 'react-native';
import { CardEstabelecimento } from '../../../components/CardEstabelecimento';
import { CardProfissional } from '../../../components/CardProfissional';
import AuthContext from '../../../context/user';
import API from '../../../services/api';
import { getCategorias } from '../../../services/categoria';
import { ICategorias } from '../../../types/categorias';

export default function TelaHome(){

  const theme = useTheme();
  const {userState} = useContext(AuthContext);
  const [listaCategorias, setListaCategorias] = useState<ICategorias[]>([]);

  const itensEstabelecimento =['1', '2', '3']


  const renderItem: ListRenderItem<ICategorias> = ({item, index}) => (
    <ButtonCategoria img_base64={item.img_base64} descricao={item.descricao} onPress={() => {}} activeOpacity={0.6} index={index} />
  );

  const renderItemEstabelecimento: ListRenderItem<ComponentProps> = ({item, index}) => (
    <CardEstabelecimento/>
  );

  const renderItemProfissinal: ListRenderItem<ComponentProps> = ({item, index}) => (
    <CardProfissional/>
  );


  useEffect(() => {

    getCategorias()
    .then((resp) => {
      setListaCategorias(resp.data.resultado);
      console.log(listaCategorias)
    })
    .catch((err) => {
      Alert.alert("Tivemos um problema ao carregar as categorias.")
    })

  },[])



return (
  <Container>
     <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <AreaMensagemNome>
        <TextoMensagem>Bem vindo,</TextoMensagem>
        <TextoNome>{userState.nome}</TextoNome>
      </AreaMensagemNome>
      <FotoUsuario source={{uri: 'https://i.pravatar.cc/'}}/>
    </AreaHeader>
    <AreaCategorias>
      <Titulo>Categorias</Titulo>
      <ListaAgenda
        data={listaCategorias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </AreaCategorias>
    <AreaEstabelecimentos>
      <Titulo>Establecimentos populares</Titulo>
      <SubTitulo>De acordo com as classificações dos usuários e sua localidade.</SubTitulo>
      <ListaAgenda
        data={itensEstabelecimento}
        renderItem={renderItemEstabelecimento}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </AreaEstabelecimentos>
    <AreaProfissionais>
      <Titulo>Profissionais populares</Titulo>
      <ListaAgenda
        data={itensEstabelecimento}
        renderItem={renderItemProfissinal}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </AreaProfissionais>
   </Container>
  );
}