
import { IUser, IUserData } from "../types/user";
import API from "./api";


export async function Login(email: string, senha: string): Promise<IUserData>{
    return await API.post<IUser>('api/seguranca',{
        email,
        senha
    })
}
