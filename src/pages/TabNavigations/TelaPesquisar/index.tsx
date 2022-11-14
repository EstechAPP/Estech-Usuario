import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { CardEmpresaPesquisa } from '../../../components/CardEmpresaPesquisa';
import { CustomInput } from '../../../components/CustomInput';
import { getEmpresasNome } from '../../../services/empresa';
import { IEmpresa } from '../../../types/empresa';

import {
 Container,
 AreaHeader,
 Titulo,
 ListaEmpresas,
} from './styles';

export default function TelaPesquisar(){
  const theme = useTheme();
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [empresas, setEmpresas] = useState<IEmpresa[]>([]);

  function pesquisarEmpresas(){
    getEmpresasNome(nomeEmpresa)
    .then(element => {
      setEmpresas(element.data.resultado)

    })
    .catch(err => {
      console.error(err)
    })
  }


return (
   <Container>
    <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <Titulo>Pesquisar</Titulo>
      <CustomInput style={{marginTop: 16}} placeholder='Pesquise o nome do estabelecimento' value={nomeEmpresa} onChangeText={e => setNomeEmpresa(e)} onPressOut={() => pesquisarEmpresas()} />
    </AreaHeader>
    <ListaEmpresas
    data={empresas}
    contentContainerStyle={{alignItems: 'center'}}
    renderItem={({item}) => (
      <CardEmpresaPesquisa data={item}/>
    )}
    />
   </Container>
  );
}