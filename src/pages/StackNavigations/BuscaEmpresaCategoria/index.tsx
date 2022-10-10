import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CardEmpresaPesquisa } from '../../../components/CardEmpresaPesquisa';
import { CustomInput } from '../../../components/CustomInput';
import { getEmpresasCategoria } from '../../../services/empresa';
import { ICategorias } from '../../../types/categorias';
import { IEmpresa } from '../../../types/empresa';
import { ListaEmpresas } from '../../TabNavigations/TelaPesquisar/styles';

import {
 AreaBranca,
 AreaTitulo,
 Container,
 TextoDetalhes,
 TextoEstabelecimento
} from './styles';

export function BuscaEmpresaCategoria({route}){
    const {categoria} : {categoria : ICategorias} = route.params;
    const [empresas, setEmpresas] = useState<IEmpresa[]>([]);
    const [refresh, setRefresh] = useState(false);
    const [pesquisa, setPesquisa] = useState("");

    useEffect(() => {
    setRefresh(true)
    getEmpresasCategoria(categoria.id)
    .then(response => {
        setEmpresas(response.data.resultado);
        setRefresh(false);
    })
    .catch(err => {
        console.error(err)
        setRefresh(false);
    })
      
    }, [])
    


   return (
        <Container>
            <AreaTitulo>
                <TextoDetalhes>Empresas</TextoDetalhes>
                <TextoEstabelecimento>{categoria.descricao}</TextoEstabelecimento>
            </AreaTitulo>
            <AreaBranca>
                <CustomInput style={{marginTop: 20}} placeholder="Pesquisa o nome da empresa" onChangeText={setPesquisa}/>
                <ListaEmpresas
                    data={empresas}
                    style={{marginTop: 20}}
                    ListEmptyComponent={(
                        <View>
                            <Text>{refresh ? "Buscando empresas..." : "Não possui empresas desta categoria."}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ alignItems: 'center'}}
                    renderItem={({item}) => (
                        <CardEmpresaPesquisa data={item} />
                    )}
                />
            </AreaBranca>
        </Container>
    );
}