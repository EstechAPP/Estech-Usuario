import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardProfissional } from '../../../components/CardProfissional';
import PrimaryButton from '../../../components/PrimaryButton';
import { putEnviaFeedbackAtendimento } from '../../../services/agenda';
import theme from '../../../styles/theme';
import { IAgendamento } from '../../../types/agenda';

import {
 Container,
 AreaFuncionarioServico,
 AreaButtons,
 TouchNaoEnviar,
 TextNaoEnviar,
 Titulo,
 Mensagem,
 AreaRating
} from './styles';

export function TelaFeedback({route}){

    const {dados} : {dados : IAgendamento[]} = route.params;
    const [feedback, setFeedback] = useState(0)
    const navigation = useNavigation();


  function enviaFeedback(feedbackInformado: Boolean, feedback : number){

    putEnviaFeedbackAtendimento(dados[0].id, feedbackInformado, feedback)
    .then(response => {
      if(feedbackInformado){
        Alert.alert(response.data.mensagem);
      }
      navigation.reset({
        index: 0,
        routes:[{name: 'TabNavigation'}]
      })
    })
  }


    
return (
   <Container>
    <Titulo>Avaliação de serviço</Titulo>
    <AreaFuncionarioServico>
      <Mensagem>O que achou do serviço prestado por este profissional?</Mensagem>
      <CardProfissional data={dados[0].usuarioFuncionario} index={0} />
    </AreaFuncionarioServico>
    <AreaRating>
      <Stars
        half={true}
        default={5}
        update={(val : number)=>{setFeedback(val)}}
        spacing={8}
        starSize={50}
        count={5}
        fullStar={<Icon name='star' color={theme.colors.select_tab} size={50} />}
        emptyStar={<Icon name='star-outline' color={theme.colors.select_tab} size={50} />}
        halfStar={<Icon name='star-half' color={theme.colors.select_tab} size={50} />}
      />
    </AreaRating>
    <AreaButtons>
      <PrimaryButton titulo='Enviar Avaliação' onPress={() => {enviaFeedback(true, feedback)}}/>
      <TouchNaoEnviar onPress={() => {enviaFeedback(false, 0)}}>
        <TextNaoEnviar>Não avaliar</TextNaoEnviar>
      </TouchNaoEnviar>
    </AreaButtons>
    
   </Container>
  );
}