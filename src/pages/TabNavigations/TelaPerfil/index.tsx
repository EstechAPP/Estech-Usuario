import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components';
import AuthContext from '../../../context/user';

import {
 Container,
 AreaPerfil,
 AreaFoto,
 FotoUsuario,
 TouchPerfil,
 AreaNomeData,
 AreaNome,
 TextoNome,
 AreaData,
 TextoData,
 ResultData,

} from './styles';

export default function TelaPerfil(){
  const theme = useTheme();
  const {userState} = useContext(AuthContext)

return (
   <Container>
    <AreaPerfil>
      <AreaFoto>
        <FotoUsuario source={{uri: 'https://i.pravatar.cc/'}} />
        <TouchPerfil>
          <Icon name='picture' size={24} color={theme.colors.white} />
        </TouchPerfil>
      </AreaFoto>
      <AreaNomeData>
        <AreaNome>
          <TextoNome>{userState.nome}</TextoNome>
        </AreaNome>
        <AreaData>
          <TextoData>
            Usuário desde 
          </TextoData>
          <ResultData>
             {` `}20/07/2022
          </ResultData>
        </AreaData>
      </AreaNomeData>
    </AreaPerfil>
   </Container>
  );
}0