import { AxiosResponse } from "axios";
import { ICategoriasData } from "../types/categorias";
import { IEmpresaData } from "../types/empresa";
import {API} from "./api";


export async function getDadosEmpresa(idEmpresa: number) : Promise<AxiosResponse<IEmpresaData>> {
    return await API.get<IEmpresaData>(`api/Empresa?idEmpresa=${idEmpresa}`)
}

export async function getEmpresasCEP(cep: string) : Promise<AxiosResponse<IEmpresaData>> {
    return await API.get<IEmpresaData>(`api/Empresa/empresaCEP?cep=${cep}`)
}
