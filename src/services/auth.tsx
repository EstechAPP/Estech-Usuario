
import { AxiosResponse } from "axios";
import { IUser, IUserData } from "../types/user";
import {API} from "./api";


export async function Login(email: string, senha: string): Promise<AxiosResponse<IUser>>{
    return await API.post<IUser>('api/seguranca',{
        email,
        senha
    })
}

export async function registrarUsuarioPadrao(nome: string, sobrenome: string, email: string, celular: string, cep: string, uf: string, cidade: string, dataCadastro: string, senha: string): Promise<AxiosResponse<IUserData>>{
    return await API.post<IUserData>('api/Usuario', {
        id: 0,
        nome,
        sobrenome,
        email,
        celular,
        senha,
        cep,
        uf,
        cidade,
        dataCadastro,
        foto_base64: "",
        tipos_Usuarioid: 1
    })
}

export async function AlterarFotoUsuario(idUsuario: number, dataURIFoto: string): Promise<AxiosResponse<IUser>>{
    return await API.post<IUser>('api/Usuario/alterarFotousuario',{
        idUsuario,
        dataURIFoto
    })
}
