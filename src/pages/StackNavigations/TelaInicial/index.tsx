import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import {
  Container,
  AreaLogo,
  EstechLogo,
  AreaInicio,
  ViewMensagem,
  Mensagem,
  ViewRegistrar,
  TextoRegistrar,
  ButtonLogin,
  TouchRegistrar,
  TextoTouch,
} from "./styles";

export default function TelaInicial() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.background_bege} barStyle={'dark-content'} />
      <AreaLogo>
        <EstechLogo>Estech</EstechLogo>
      </AreaLogo>
      <AreaInicio>
        <ViewMensagem>
          <Mensagem>Encontre serviços estéticos com facilidade</Mensagem>
        </ViewMensagem>
        <ButtonLogin titulo="Fazer login" onPress={() => {navigation.navigate('TelaLogin')}} />
        <ViewRegistrar>
          <TextoRegistrar>
            Não possui conta? {" "}
          </TextoRegistrar>
            <TouchRegistrar onPress={() => {navigation.navigate('RegistroInicial')}}>
              <TextoTouch>Registre-se aqui</TextoTouch>
            </TouchRegistrar>
        </ViewRegistrar>
      </AreaInicio>
    </Container>
  );
}
