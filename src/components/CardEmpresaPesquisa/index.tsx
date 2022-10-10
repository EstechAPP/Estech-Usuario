import React from "react";
import { IEmpresa } from "../../types/empresa";
import DespertadorSVG from "../../../assets/icons/despertador.svg";

import {
  AreaStatusHora,
  CapaEmpresa,
  ComponenteHorario,
  ComponenteStatus,
  Container,
  Header,
  LogoEmpresa,
  NomeFantasiaEmpresa,
  PontoStatus,
  TextoHorario,
  TextoStatus,
  TouchCard,
} from "./styles";
import moment from "moment";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

export function CardEmpresaPesquisa({ data }: { data: IEmpresa }) {
  const theme = useTheme();
  const navigation = useNavigation();

  function openClosed() {
    const dataHoje = new Date();
    const dataInicioSplit = data.horasFuncionamentoInicio.split(":");
    const dataFimSplit = data.horasFuncionamentoFim.split(":");

    const dataInicioTratado = new Date(
      dataHoje.getFullYear(),
      dataHoje.getMonth(),
      dataHoje.getDate(),
      Number(dataInicioSplit[0]),
      Number(dataInicioSplit[1]),
      0
    );
    const dataFimTratado = new Date(
      dataHoje.getFullYear(),
      dataHoje.getMonth(),
      dataHoje.getDate(),
      Number(dataFimSplit[0]),
      Number(dataFimSplit[1]),
      0
    );

    if (
      moment(dataHoje).isAfter(dataInicioTratado) &&
      moment(dataHoje).isBefore(dataFimTratado)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <TouchCard onPress={() => {navigation.navigate('TelaEstabelecimento', {idEmpresa: data.id})}}>
      <Container>
        <CapaEmpresa source={{ uri: data.capaEmp }} />
        <Header>
          <LogoEmpresa source={{ uri: data.logoEmp }} />
          <NomeFantasiaEmpresa numberOfLines={2}>
            {data.nomefantasia}
          </NomeFantasiaEmpresa>
        </Header>
        <AreaStatusHora>
          {openClosed() ? (
            <ComponenteStatus>
              <PontoStatus color={theme.colors.verde_open} />
              <TextoStatus>Aberto</TextoStatus>
            </ComponenteStatus>
          ) : (
            <ComponenteStatus>
              <PontoStatus color={theme.colors.vermelho_closed} />
              <TextoStatus>Fechado</TextoStatus>
            </ComponenteStatus>
          )}
          <ComponenteHorario>
            <DespertadorSVG />
            <TextoHorario>
              {data.horasFuncionamentoInicio} as {data.horasFuncionamentoFim}
            </TextoHorario>
          </ComponenteHorario>
        </AreaStatusHora>
      </Container>
    </TouchCard>
  );
}
