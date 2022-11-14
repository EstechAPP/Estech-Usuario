import { IEmpresa } from "./empresa";
import { IServico } from "./servico";
import { IUser } from "./user";

export interface IAgendamento{
    id: Number
    dataAgendamento: Date,
    tempoeMedioServico: string,
    feedback: Number
    confirmado: true,
    servicoFinalizado: true,
    canceladoPor: Number
    cliente_id: Number
    funcionario_id: Number
    empresa_id: Number,
    servicos_id: Number,
    empresaAgenda: IEmpresa,
    usuarioFuncionario: IUser,
    usuarioCliente: IUser,
    servicoAgenda: IServico
}

export interface IDataAgendamento{
    status: boolean;
    resultado: IAgendamento[];
    mensagem: string;
}

export interface IConfirmaAgendamento{
    dadosEmpresa: IEmpresa;
    profissionalSelected: IUser;
    servico: IServico;
    dataAgendamento: string;
}
