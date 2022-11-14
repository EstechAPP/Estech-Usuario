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
import { getCategorias } from '../../../services/categoria';
import { ICategorias } from '../../../types/categorias';
import axios from 'axios';
import { getEmpresasCEP } from '../../../services/empresa';
import { IEmpresa } from '../../../types/empresa';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SpinnerLoading } from '../../../components/SpinnerLoading';
import { getAguardandoFeedback } from '../../../services/agenda';

export default function TelaHome(){

  const theme = useTheme();
  const navigation = useNavigation();
  const {userState} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [listaCategorias, setListaCategorias] = useState<ICategorias[]>([]);
  const [listaEstabelecimentos, setListaEstabelecimentos] = useState<IEmpresa[]>([]);

  const renderItem: ListRenderItem<ICategorias> = ({item, index}) => (
    <ButtonCategoria img_base64={item.img_base64} descricao={item.descricao} onPress={() => {navigation.navigate('BuscaEmpresaCategoria', {categoria: item})}} activeOpacity={0.6} index={index} />
  );

  const renderItemEstabelecimento: ListRenderItem<IEmpresa> = ({item, index}) => (
    <CardEstabelecimento dados={item} />
  );

  // const renderItemProfissinal: ListRenderItem<ComponentProps> = ({item, index}) => (
  //   <CardProfissional/>
  // );

    const requisicaoum = getCategorias();
    const requisicaodois = getEmpresasCEP(userState.cep);


    function verificaFeedback(){
      getAguardandoFeedback(userState.id)
      .then(response => {
        if(response.data.resultado.length > 0){
          navigation.navigate('ModalFeedback', {dados: response.data.resultado})
        }
      })
      .catch(err => {

      })
    }


  useEffect(() => {
    verificaFeedback();
    setVisible(true);
    axios.all([requisicaoum, requisicaodois])
    .then(
      axios.spread((...responses) => {
        const responseum = responses[0].data.resultado;
        const responsedois = responses[1].data.resultado;
        setListaCategorias(responseum);
        setListaEstabelecimentos(responsedois);
        setVisible(false)
      })
      )
      .catch(errors => {
        console.error(errors);
        setVisible(false)
    })
  },[])



return (
  <Container>
      <Spinner visible={visible} customIndicator={(
        <SpinnerLoading titulo='Carregando...' />
      )}  />
     <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <AreaMensagemNome>
        <TextoMensagem>Bem vindo,</TextoMensagem>
        <TextoNome numberOfLines={1} >{userState.nome} {userState.sobrenome}</TextoNome>
      </AreaMensagemNome>
      {userState.foto_base64 ? (
        <FotoUsuario source={{uri: userState.foto_base64}} />
      )
    : (
        <FotoUsuario source={require('../../../../assets/no-profile-icon.png')} />
    )}
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
      <Titulo>Estabelecimentos próximos</Titulo>
      <SubTitulo>De acordo com sua localização</SubTitulo>
      <ListaAgenda
        data={listaEstabelecimentos}
        renderItem={renderItemEstabelecimento}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </AreaEstabelecimentos>
    {/* <AreaProfissionais>
      <Titulo>Profissionais populares</Titulo>
      <ListaAgenda
        data={listaEstabelecimentos}
        renderItem={renderItemProfissinal}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </AreaProfissionais> */}
   </Container>
  );
}