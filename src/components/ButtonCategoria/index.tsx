import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
 Container,
 AreaIcone,
 Titulo,
 ImagemIcone
} from './styles';

export interface IButtonCategoria extends TouchableOpacityProps {
    img_base64: string;
    descricao: string;
    index: number;
    onPress: () => void;
}

export default function ButtonCategoria({img_base64, descricao, ...rest} : IButtonCategoria){
return (
   <Container {...rest} >
    <AreaIcone>
        <ImagemIcone source={{uri: `data:image/png;base64,${img_base64}` }} />
    </AreaIcone>
    <Titulo>{descricao}</Titulo>
   </Container>
  );
}