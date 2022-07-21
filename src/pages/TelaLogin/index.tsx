import React from "react";
import { CustomInput } from "../../components/CustomInput";
import { PrimaryButton } from "../../components/PrimaryButton";
import FacebookSVG from '../../../assets/icons/facebook.svg';
import GoogleSVG from '../../../assets/icons/google.svg';
import AppleSVG from '../../../assets/icons/apple.svg';

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

export default function TelaLogin() {
  return (
    <Container>
      <ViewTitulo>
        <TextoTitulo>Fazer login</TextoTitulo>
      </ViewTitulo>
      <AreaLogin>
        <TextoLabel>
          Efetue login com seu email ou rede social vinculada
        </TextoLabel>
        <CustomInput style={{ marginTop: 34 }} placeholder="Informe seu e-mail" />
        <CustomInput style={{ marginTop: 34 }} placeholder="sua senha" secureTextEntry />
        <AreaEsqueceuSenha>
          <TouchSenha>
            <TextoSenha>Esqueceu sua senha?</TextoSenha>
          </TouchSenha>
        </AreaEsqueceuSenha>
        <PrimaryButton />
        <AreaLoginSocial>
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
        </AreaLoginSocial>
        <AreaRegistrar>
          <TextoRegistrar>
            Não possui conta?
          </TextoRegistrar>
          <TouchRegistro>
            <TextoRegistro>
              {" "}Registre-se aqui
            </TextoRegistro>
          </TouchRegistro>
        </AreaRegistrar>
      </AreaLogin>
    </Container>
  );
}
