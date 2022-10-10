import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { CustomInput, CustomMaskInput } from '../../../../components/CustomInput';
import PrimaryButton from '../../../../components/PrimaryButton';
import { APIViaCEP } from '../../../../services/api';
import { registrarUsuarioPadrao } from '../../../../services/auth';
import { Masks } from 'react-native-mask-input';

import {
    Container,
    ViewTitulo,
    TextoTitulo,
    AreaLogin,
    ViewCampo,
    TextoCampo,
    ViewButton,
} from './styles';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SpinnerLoading } from '../../../../components/SpinnerLoading';
import moment from 'moment';

export function RegistroInicial(){
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [visible, setVisible] = useState(false);

    async function efetuarRegistro(){
        if(senha != confirmaSenha){
            Alert.alert("Senha informada não coincide com a de confirmação, verifique novamente.")
            return;
        }
        if(celular.length < 15){
            Alert.alert("Número de celular informado, inválido, verifique novamente.")
            return;
        }
        if(nome == "" || sobrenome == "" || email == "" || celular == "" || cep == "" || uf == "" || cidade == "" || senha == ""){
            Alert.alert("Necessário preenchimento total do formulário de cadastro.")
        }
        const dataCadastro = moment(new Date).utc().toISOString();
        setVisible(true);
        registrarUsuarioPadrao(nome, sobrenome, email, celular, cep, uf, cidade, dataCadastro, senha)
        .then(response => {
            if(response.data.status){
                setVisible(false)
                Alert.alert('Cadastrado com sucesso!', 'Agora só efetuar seu login 😉');
                navigation.reset({
                    index: 0,
                    routes:[{name: 'TelaLogin'}]
                })
            }
            else {
                setVisible(false)
                Alert.alert(response.data.mensagem)
            }
        })
        .catch(err => {
            setVisible(false)
            console.error(err.response)
        })
    }

    async function buscaUFCidade(){
        setCidade('Buscando dados...')
        setUf('Buscando dados...')
        APIViaCEP.get(`${cep}/json/`)
        .then(response => {
            if(response.data.erro){
                Alert.alert('CEP Informado inválido, verifique e tente novamente.')
                setCep('')
                setUf('')
                setCidade('')
                return
            }
            setCidade(response.data.localidade)
            setUf(response.data.uf)
            
        })
        .catch(err => {
            Alert.alert('Tivemos um problema em buscar seu CEP, tente novamente mais tarde.')
        })
    }


return (
    <Container>
    <Spinner visible={visible} customIndicator={(
        <SpinnerLoading titulo='Realizando cadastro...' />
    )}  />
    <ViewTitulo>
        <TextoTitulo>Registrar-se</TextoTitulo>
    </ViewTitulo>
    <AreaLogin>
        <ViewCampo>
            <TextoCampo>Nome</TextoCampo>
            <CustomInput placeholder='Nome' value={nome} onChangeText={(e) => setNome(e)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Sobrenome</TextoCampo>
            <CustomInput placeholder='Sobrenome' value={sobrenome} onChangeText={(e) => setSobrenome(e)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Email</TextoCampo>
            <CustomInput placeholder='ex: email@gmail.com' value={email} onChangeText={(e) => setEmail(e)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Celular</TextoCampo>
            <CustomMaskInput mask={Masks.BRL_PHONE} maxLength={15} placeholder='ex: (99) 99999-9999' value={celular} onChangeText={(e) => setCelular(e)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>CEP</TextoCampo>
            <CustomMaskInput mask={Masks.ZIP_CODE} maxLength={9} placeholder='ex: 99999-999' value={cep} onChangeText={(e) => setCep(e)} onEndEditing={buscaUFCidade} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>UF</TextoCampo>
            <CustomInput placeholder='ex: SP' value={uf} onChangeText={(e) => setUf(e)} editable={false} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Cidade</TextoCampo>
            <CustomInput placeholder='ex: São Paulo' value={cidade} onChangeText={(e) => setCidade(e)} editable={false}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Senha</TextoCampo>
            <CustomInput placeholder='Senha' secureTextEntry value={senha} onChangeText={(e) => setSenha(e)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Confirmar senha</TextoCampo>
            <CustomInput placeholder='Confirme sua senha' secureTextEntry value={confirmaSenha} onChangeText={(e) => setConfirmaSenha(e)} />
        </ViewCampo>
        <ViewButton>
            <PrimaryButton titulo='Continuar' onPress={efetuarRegistro} />
        </ViewButton>
    </AreaLogin>
   </Container>
  );
}