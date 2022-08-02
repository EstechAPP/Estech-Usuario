import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
 Container,
 ImagemServico,
 AreaNomePreco,
 TextoNome,
 AreaMediaPreco,
 TextoDuracao,
 TextoPreco,
} from './styles';

export function CardServicos(){

    const navigation = useNavigation();

return (
   <Container onPress={() => navigation.navigate('Agendamento')} >
    <ImagemServico source={require("../../../assets/fotobarbearia.png")} />
    <AreaNomePreco>
        <TextoNome numberOfLines={2}>
            Corte Degradê / Barba / Sobrancelha / Teste / Teste / Sobrancelha / Teste
        </TextoNome>
        <AreaMediaPreco>
            <TextoDuracao>
                Duração média do serviço: 01:20
            </TextoDuracao>
            <TextoPreco>
                R$ 40,00
            </TextoPreco>
        </AreaMediaPreco>
    </AreaNomePreco>
   </Container>
  );
}