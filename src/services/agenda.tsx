import { AxiosResponse } from "axios";
import { IDataAgendamento } from "../types/agenda";
import {API} from "./api";


export async function getAgendamentosUsuario(idUsuario: number) : Promise<AxiosResponse<IDataAgendamento>> {
    return await API.get <IDataAgendamento>(`api/Agenda/getAgendamentosUsuario?idCliente=${idUsuario}`);
}
