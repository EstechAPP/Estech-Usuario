import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

import {
 Container,
 AreaLottie,
 AreaMensagem,
 TextoStatus,
 TextoMensagem,
 AreaButton,
 
} from './styles';
import PrimaryButton from '../../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export function FimAgendamento(){
    const navigation = useNavigation();

return (
   <Container>
    <AreaLottie>
        <AnimatedLottieView
            source={require('../../../../assets/icons/success.json')}
            autoPlay
            loop
        />
    </AreaLottie>
    <AreaMensagem>
        <TextoStatus>Solicitação de agendamento {'\n'} enviado com sucesso!</TextoStatus>
        <TextoMensagem>Assim que o profissional confirmar seu {'\n'} horário, notificaremos você.</TextoMensagem>
    </AreaMensagem>
    <AreaButton>
        <PrimaryButton titulo="Voltar para página inicial" onPress={() => navigation.reset({index: 0, routes:[{name: 'TabNavigation'}]})} />
    </AreaButton>

   </Container>
  );
}