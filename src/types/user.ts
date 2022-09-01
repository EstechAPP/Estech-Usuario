export interface IUser{
    id: number;
    nome: string;
    email: string;
    celular: string;
    cep: string;
    uf: string;
    cidade: string;
    idTipoUsuario: number;
}

export interface IUserData{
    data: IUser
}

export interface IUserContextProps{
    userState: IUser;
    setUserState: React.Dispatch<React.SetStateAction<IUser>>;
}