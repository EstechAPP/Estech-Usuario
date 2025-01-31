import { AxiosResponse } from "axios";
import { ICategoriasData } from "../types/categorias";
import {API} from "./api";


export async function getCategorias() : Promise<AxiosResponse<ICategoriasData>> {
    return await API.get <ICategoriasData>('api/TIPOSCategoria')
}
