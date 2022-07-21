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
  return (
    <Container>
      <AreaLogo>
        <EstechLogo>Estech</EstechLogo>
      </AreaLogo>
      <AreaInicio>
        <ViewMensagem>
          <Mensagem>Encontre serviços estéticos com facilidade</Mensagem>
        </ViewMensagem>
        <ButtonLogin />
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
