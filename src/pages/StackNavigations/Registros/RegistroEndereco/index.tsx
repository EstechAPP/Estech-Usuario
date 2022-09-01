import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomInput } from '../../../../components/CustomInput';
import PrimaryButton from '../../../../components/PrimaryButton';

import {
 Container,
 ViewTitulo,
 TextoTitulo,
 AreaLogin,
 ViewCampo,
 TextoCampo,
 ViewButton,

} from './styles';

export function RegistroEndereco(){
    const navigation = useNavigation();
return (
   <Container>
    <ViewTitulo>
        <TextoTitulo>Registrar-se</TextoTitulo>
    </ViewTitulo>
    <AreaLogin>
        <ViewCampo>
            <TextoCampo>CEP</TextoCampo>
            <CustomInput placeholder='ex: 99999-999'/>
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Cidade</TextoCampo>
            <CustomInput placeholder='ex: São Paulo'/>
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>UF</TextoCampo>
            <CustomInput placeholder='ex: SP'/>
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Logradouro</TextoCampo>
            <CustomInput placeholder='ex: Rua Fulano de Tal'/>
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Número</TextoCampo>
            <CustomInput placeholder='ex: 999'/>
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Complemento (Opcional)</TextoCampo>
            <CustomInput placeholder='ex: Residência'/>
        </ViewCampo>
        <ViewButton>
            <PrimaryButton titulo='Finalizar Cadastro' onPress={() => {navigation.navigate('TabNavigation')}} />
        </ViewButton>
    </AreaLogin>
   </Container>
  );
}