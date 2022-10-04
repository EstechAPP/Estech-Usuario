import { AxiosResponse } from "axios";
import { IDataAgendamento } from "../types/agenda";
import {API} from "./api";


export async function getAgendamentosUsuario(idUsuario: number) : Promise<AxiosResponse<IDataAgendamento>> {
    return await API.get <IDataAgendamento>(`api/Agenda/getAgendamentosUsuario?idCliente=${idUsuario}`);
}

export async function getAgendamentosFuncionario(idFuncionario: number, idEmpresa: number, dataAgendamento: string) : Promise<AxiosResponse<IDataAgendamento>> {
    return await API.get <IDataAgendamento>(`api/Agenda/getAgendamentosFuncionario?idFuncionario=${idFuncionario}&idEmpresa=${idEmpresa}&dataAgendamento=${dataAgendamento}`);
}
