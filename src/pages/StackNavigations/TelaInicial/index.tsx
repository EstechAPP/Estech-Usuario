import { useNavigation } from "@react-navigation/native";
import React from "react";

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

  return (
    <Container>
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
            <TouchRegistrar>
              <TextoTouch>Registre-se aqui</TextoTouch>
            </TouchRegistrar>
        </ViewRegistrar>
      </AreaInicio>
    </Container>
  );
}
