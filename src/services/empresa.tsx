import { AxiosResponse } from "axios";
import { IEmpresaData } from "../types/empresa";
import { IUserData } from "../types/user";
import {API} from "./api";


export async function getDadosEmpresa(idEmpresa: number) : Promise<AxiosResponse<IEmpresaData>> {
    return await API.get<IEmpresaData>(`api/Empresa?idEmpresa=${idEmpresa}`)
}

export async function getEmpresasCEP(cep: string) : Promise<AxiosResponse<IEmpresaData>> {
    return await API.get<IEmpresaData>(`api/Empresa/empresaCEP?cep=${cep}`)
}

export async function getFuncionariosEmpresa(idEmpresa: number) : Promise<AxiosResponse<IUserData>> {
    return await API.get<IUserData>(`api/Empresa/buscaFuncionariosEmpresa?idEmpresa=${idEmpresa}`)
}

export async function getProfissionaisDoServico(idServico: number) : Promise<AxiosResponse<IUserData>> {
    return await API.get<IUserData>(`/api/Servicos/BuscaProfissionaisServico?idServico=${idServico}`)
}

