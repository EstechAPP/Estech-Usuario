import { AxiosResponse } from "axios";
import { IServicoData } from "../types/servico";
import {API} from "./api";


export async function getDadosServico(idServico: number) : Promise<AxiosResponse<IServicoData>> {
    return await API.get<IServicoData>(`api/Servicos?idServico=${idServico}`)
}