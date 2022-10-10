import { AxiosResponse } from "axios";
import { IDataAgendamento } from "../types/agenda";
import {API, APIViaCEP} from "./api";


export async function getAgendamentosUsuario(idUsuario: number) : Promise<AxiosResponse<IDataAgendamento>> {
    return await API.get <IDataAgendamento>(`api/Agenda/getAgendamentosUsuario?idCliente=${idUsuario}`);
}

export async function getAgendamentosFuncionario(idFuncionario: number, idEmpresa: number, dataAgendamento: string) : Promise<AxiosResponse<IDataAgendamento>> {
    return await API.get <IDataAgendamento>(`api/Agenda/getAgendamentosFuncionario?idFuncionario=${idFuncionario}&idEmpresa=${idEmpresa}&dataAgendamento=${dataAgendamento}`);
}

export async function criarAgendamento(dataAgendamento: string, tempoeMedioServico: string,  clienteID : number, funcionarioID : number, empresaID : number, servicoID: number ) : Promise<AxiosResponse<IDataAgendamento>>{
    return await API.post('api/Agenda', {
        id: 0,
        dataAgendamento,
        tempoeMedioServico,
        feedback: 0,
        confirmado: null,
        servicoFinalizado: false,
        canceladoPor: 0,
        cliente_id: clienteID,
        funcionario_id: funcionarioID,
        empresa_id: empresaID,
        servicos_id: servicoID
    })
}
