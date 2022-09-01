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

export function RegistroInicial(){
    const navigation = useNavigation();
return (
    <Container>
    <ViewTitulo>
        <TextoTitulo>Registrar-se</TextoTitulo>
    </ViewTitulo>
    <AreaLogin>
        <ViewCampo>
            <TextoCampo>Nome</TextoCampo>
            <CustomInput placeholder='Nome' />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Sobrenome</TextoCampo>
            <CustomInput placeholder='Sobrenome' />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Email</TextoCampo>
            <CustomInput placeholder='ex: email@gmail.com' />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Celular</TextoCampo>
            <CustomInput placeholder='ex: (99) 99999-9999' />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Senha</TextoCampo>
            <CustomInput placeholder='Senha' />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Confirmar senha</TextoCampo>
            <CustomInput placeholder='Confirme sua senha' />
        </ViewCampo>
        <ViewButton>
            <PrimaryButton titulo='Continuar' onPress={() => {navigation.navigate('RegistroEndereco')}} />
        </ViewButton>
    </AreaLogin>
   </Container>
  );
}