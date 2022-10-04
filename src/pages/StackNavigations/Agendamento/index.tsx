import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState}from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import { CardProfissional } from '../../../components/CardProfissional';
import { CardProfissionalSelect } from '../../../components/CardProfissionalSelect';
import { CardServicoPreview, CardServicos } from '../../../components/CardServicos';
import PrimaryButton from '../../../components/PrimaryButton';
import { getAgendamentosFuncionario } from '../../../services/agenda';
import { API } from '../../../services/api';
import { getProfissionaisDoServico } from '../../../services/empresa';
import { IAgendamento } from '../../../types/agenda';
import { IEmpresa } from '../../../types/empresa';
import { IServico } from '../../../types/servico';
import { IUser } from '../../../types/user';
import { Titulo } from '../TelaEstabelecimento/styles';

import {
 Container,
 AreaTituloTela,
 TituloAgendamento,
 TituloEstabelecimento,
 AreaBranca,
 AreaServico,
 TituloServico,
 AreaProfissional,
 TituloEscolha,
 ListaProfissionais,
 AreaCalendario,
 TituloData,
 AreaBotao,
 AreaHorarios,
 TituloHorario,
 ListaHorarios,
 ViewHorario,
 TextoHorario,


} from './styles';

export function Agendamento({route}){
  const {servico, dadosEmpresa} : {servico : IServico, dadosEmpresa : IEmpresa} = route.params;
  const [dados, setDados] = useState();
  const [data, setData] = useState<DateData>();
  const [profissionalSelected, setProfissionalSelected] = useState<IUser>({});
  const [horariosBase, setHorariosBase] = useState([]);


  const handleOnPress = contact => {
    setProfissionalSelected(contact)
  };
  const getSelected = contact => profissionalSelected == contact;  

  const navigation = useNavigation();

  useEffect(() => {
    getProfissionaisDoServico(servico.id)
    .then((response) => {
      setDados(response.data.resultado)
    })
    .catch((err) => {
      
    })

  }, [])

  function getFullMinutes(minutes : number){
    if (minutes < 10) {
      return '0' + minutes;
  }
  return minutes;
  }

  const timelineLabels = () => {
    const periodsStartInADay = moment.duration(dadosEmpresa.horasFuncionamentoInicio).asMinutes();
    const periodsEndInADay = moment.duration(dadosEmpresa.horasFuncionamentoFim).asMinutes();
    const periodInaDay = periodsEndInADay - periodsStartInADay;
    const timeLabels = [];
  
    const startTimeMoment = moment(dadosEmpresa.horasFuncionamentoInicio, 'HH:mm');

    for (let i = 0; i <= periodInaDay; i += 15) {
      startTimeMoment.add(i === 0 ? 0 : 15, 'minutes');
      timeLabels.push(startTimeMoment.format('HH:mm'));
    }

    getAgendamentosFuncionario(profissionalSelected.id, dadosEmpresa.id, data?.dateString)
    .then(response => {
      console.log(response.data)
      response.data.resultado.forEach((element) => {

        const dataInicioServico = moment(element.dataAgendamento).toDate();
        const datafimServico = moment(element.dataAgendamento).add(element.tempoeMedioServico).toDate();
        const horaInicioServico = dataInicioServico.getHours() + ":" + getFullMinutes(dataInicioServico.getMinutes()); 
        const horaFimServico = datafimServico.getHours() + ":" + getFullMinutes(datafimServico.getMinutes());
        
      })


    }).catch(err => {
      console.error(err)
    })

    setHorariosBase(timeLabels);
  };
  
  


return (
   <Container>
    <AreaTituloTela>
      <TituloAgendamento>Agendamento</TituloAgendamento>
      <TituloEstabelecimento>{dadosEmpresa.nomefantasia}</TituloEstabelecimento>
    </AreaTituloTela>
    <AreaBranca>
      <AreaServico>
        <TituloServico>Serviço escolhido</TituloServico>
        <CardServicoPreview data={servico}/>
      </AreaServico>
      <AreaProfissional>
        <TituloEscolha>Escolha o profissional</TituloEscolha>
        <ListaProfissionais
          data={dados}
          horizontal
          renderItem={({item}) => 
            <CardProfissionalSelect data={item} selected={getSelected(item)} onPress={() => handleOnPress(item)} />
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </AreaProfissional>
      <AreaCalendario>
        <TituloData>Escolha a data</TituloData>
        <Calendar
        onDayPress={day => {setData(day)}}
        minDate={new Date().toString()}
        />
      </AreaCalendario>
      <AreaHorarios>
          <TituloHorario>Horários Disponíveis</TituloHorario>
          <ListaHorarios
            data={horariosBase}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => 
              <ViewHorario>
                <TextoHorario>{item}</TextoHorario>
              </ViewHorario>
            }
          />
      </AreaHorarios>
    </AreaBranca>
    <AreaBotao>
      <PrimaryButton titulo='Realizar agendamento' style={{borderRadius: 6}}  onPress={() => timelineLabels()}/>
    </AreaBotao>

   </Container>
  );
}