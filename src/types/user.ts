export interface IUser{
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    celular: string;
    cep: string;
    uf: string;
    cidade: string;
    imgPerfil_base64: string;
    tipos_Usuarioid: number;
    donoEmpresa: number;
    funcionarioEmpresa: number;
}

export interface IUserData{
    resultado: IUser;
    status: boolean;
    mensagem: string;
}

export interface IUserContextProps{
    userState: IUser;
    setUserState: React.Dispatch<React.SetStateAction<IUser>>;
}

