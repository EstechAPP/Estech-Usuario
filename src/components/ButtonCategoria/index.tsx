import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
 Container,
 AreaIcone,
 Titulo,
} from './styles';

export interface IButtonCategoria extends TouchableOpacityProps {
    icone: JSX.Element;
    titulo: string;
    index: number;
    onPress: () => void;
}

export default function ButtonCategoria({icone, titulo, ...rest} : IButtonCategoria){
return (
   <Container {...rest} >
    <AreaIcone>
        {icone}
    </AreaIcone>
    <Titulo>{titulo}</Titulo>
   </Container>
  );
}