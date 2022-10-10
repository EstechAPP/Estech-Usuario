import React, { useContext, useState } from "react";
import { CustomInput } from "../../../components/CustomInput";
import PrimaryButton from "../../../components/PrimaryButton";
import FacebookSVG from '../../../../assets/icons/facebook.svg';
import GoogleSVG from '../../../../assets/icons/google.svg';
import AppleSVG from '../../../../assets/icons/apple.svg';

import {
  Container,
  ViewTitulo,
  TextoTitulo,
  AreaLogin,
  TextoLabel,
  AreaEsqueceuSenha,
  TouchSenha,
  TextoSenha,
  AreaLoginSocial,
  Divisoria,
  Divisa,
  TextoDivisa,
  AreaBotoesSociais,
  ContainerBotao,
  AreaRegistrar,
  TextoRegistrar,
  TextoRegistro,
  TouchRegistro,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Login } from "../../../services/auth";
import AuthContext from "../../../context/user";
import { Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { SpinnerLoading } from "../../../components/SpinnerLoading";

export default function TelaLogin() {

  const [email, setEmail] = useState('teste@teste.com');
  const [senha, setSenha] = useState('123123');
  const [visible, setVisible] = useState(false);
  const {userState,setUserState} = useContext(AuthContext);

  function EfetuarLogin(){
    if(email == '' || senha == ''){
      Alert.alert('Necessário o preenchimento dos campos de email e senha para realizar o login')
    }
    else{
      setVisible(true);
      Login(email, senha)
      .then(response =>{
        setUserState(response.data.usuario);
        setEmail('');
        setSenha('');
        setVisible(false);
        navigation.reset({
          index: 0,
          routes:[{name: 'TabNavigation'}]
      })
      })
      .catch(err => {
        setVisible(false);
        if(err.response){
          if(err.response.status === 401)
              Alert.alert('Login ou senha incorretos, verifique suas credenciais e tente novamente.')
          }
          if (err.response.status === 500) {
            Alert.alert('Tivemos um problema em processar sua autenticação, tente novamente mais tarde.')
          }
          else{
            Alert.alert('Não foi possível realizar seu login, verifique sua conexão e tente novamente.')
          }
      })
    }
  }

  const navigation = useNavigation();

  return (
    <Container>
      <Spinner visible={visible} customIndicator={(
        <SpinnerLoading titulo='Validando suas credenciais...' />
      )}  />
      <ViewTitulo>
        <TextoTitulo>Fazer login</TextoTitulo>
      </ViewTitulo>
      <AreaLogin>
        <TextoLabel>
          Efetue login com seu email ou rede social vinculada
        </TextoLabel>
        <CustomInput style={{ marginTop: 34 }} value={email} onChangeText={(value) => setEmail(value)} placeholder="Informe seu e-mail" />
        <CustomInput style={{ marginTop: 34 }} value={senha} onChangeText={(value) => setSenha(value)} placeholder="sua senha" secureTextEntry />
        <AreaEsqueceuSenha>
          <TouchSenha>
            <TextoSenha>Esqueceu sua senha?</TextoSenha>
          </TouchSenha>
        </AreaEsqueceuSenha>
        <PrimaryButton titulo="Fazer login" onPress={() => {EfetuarLogin()}} />
        {/* <AreaLoginSocial>
          <Divisoria>
            <Divisa />
            <TextoDivisa>ou logue com</TextoDivisa>
            <Divisa />
          </Divisoria>
          <AreaBotoesSociais>
            <ContainerBotao>
              <FacebookSVG/>
            </ContainerBotao>
            <ContainerBotao>
              <GoogleSVG/>
            </ContainerBotao>
            <ContainerBotao>
              <AppleSVG/>
            </ContainerBotao>
          </AreaBotoesSociais>
        </AreaLoginSocial> */}
        <AreaRegistrar>
          <TextoRegistrar>
            Não possui conta?
          </TextoRegistrar>
          <TouchRegistro onPress={() => navigation.navigate('RegistroInicial')} >
            <TextoRegistro>
              {" "}Registre-se aqui
            </TextoRegistro>
          </TouchRegistro>
        </AreaRegistrar>
      </AreaLogin>
    </Container>
  );
}
