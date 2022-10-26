import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState}from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { CardProfissionalSelect } from '../../../components/CardProfissionalSelect';
import { CardServicoPreview } from '../../../components/CardServicos';
import PrimaryButton from '../../../components/PrimaryButton';
import { getAgendamentosFuncionario } from '../../../services/agenda';
import { getProfissionaisDoServico } from '../../../services/empresa';
import theme from '../../../styles/theme';
import { IConfirmaAgendamento } from '../../../types/agenda';
import { IEmpresa } from '../../../types/empresa';
import { IServico } from '../../../types/servico';
import { IUser } from '../../../types/user';

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
 Avisos,


} from './styles';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

export function Agendamento({route}){
  const navigation = useNavigation();
  const theme = useTheme();
  const {servico, dadosEmpresa} : {servico : IServico, dadosEmpresa : IEmpresa} = route.params;

  const [dados, setDados] = useState();
  const [data, setData] = useState<DateData>();
  const [profissionalSelected, setProfissionalSelected] = useState<IUser>({});
  const [horariosBase, setHorariosBase] = useState([]);
  const [horarioSelected, setHorarioSelected] = useState<string>("");


  const getSelected = contact => profissionalSelected == contact;  
  const getHorarioSelected = horario => horarioSelected == horario;

  useEffect(() => {
    if(data && profissionalSelected){
      timelineLabels()
    }
  
  }, [data, profissionalSelected])
  

  useEffect(() => {
    getProfissionaisDoServico(servico.id)
    .then((response) => {
      setDados(response.data.resultado)
    })
    .catch((err) => {
      
    })
  }, [])

  function toTimestamp(horario){
    var aux = horario.split(':'), dt = new Date();
    dt.setHours(aux[0]);
    dt.setMinutes(aux[1]);
    dt.setSeconds(0);
    return dt.getTime();
  }

  const timelineLabels = () => {
    setHorariosBase([]);
    const periodsStartInADay = moment.duration(dadosEmpresa.horasFuncionamentoInicio).asMinutes();
    const periodsEndInADay = moment.duration(dadosEmpresa.horasFuncionamentoFim).asMinutes();
    const periodInaDay = periodsEndInADay - periodsStartInADay;
    const timeLabels : string[] = [];
  
    const startTimeMoment = moment(dadosEmpresa.horasFuncionamentoInicio, 'HH:mm');

    for (let i = 0; i <= periodInaDay; i += 15) {
      startTimeMoment.add(i === 0 ? 0 : 15, 'minutes');
      timeLabels.push(startTimeMoment.format('HH:mm'));
    }

    getAgendamentosFuncionario(profissionalSelected.id, dadosEmpresa.id, data?.dateString)
    .then(response => {
      response.data.resultado.forEach((element) => {

        const dataInicioServicoAgendados = moment(element.dataAgendamento).format('HH:mm');
        const datafimServicoAgendados = moment(element.dataAgendamento).add(element.tempoeMedioServico).format('HH:mm');

       for (let i = 0; i < timeLabels.length; i++) { // Limpa horários dentro do range de Serviços OCUPADOS.
        if (timeLabels[i] >= dataInicioServicoAgendados && timeLabels[i] < datafimServicoAgendados){
          timeLabels.splice(i, 1);
          i--
        }
       }

       for (let i = 0; i < timeLabels.length; i++) { // retira horários em que o tempoMedioServico adentre o horario ocupado.
        const dataFimServicoEscolhido = moment(new Date(toTimestamp(timeLabels[i]))).add(servico.tempomedio).format('HH:mm')
        if (dataFimServicoEscolhido >= dataInicioServicoAgendados && dataFimServicoEscolhido <= datafimServicoAgendados){
          timeLabels.splice(i, 1);
          i--
        }
       }

      })
      setHorariosBase(timeLabels);

    }).catch(err => {
      console.error(err)
    })



  };

  function realizarAgendamento(){

    const dataHorarioString = data?.dateString + "T" + horarioSelected;
    const dataHorarioMoment = moment(dataHorarioString).utc();
    const dadosAgendamento : IConfirmaAgendamento = {
      dadosEmpresa,
      profissionalSelected,
      servico: servico,
      dataAgendamento: dataHorarioMoment
    }

    navigation.navigate('ConfirmaAgendamento', {dadosAgendamento})

  }
  
  


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
          renderItem={({item, index}) => 
            <CardProfissionalSelect data={item} index={index} selected={getSelected(item)} onPress={() => setProfissionalSelected(item)} />
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
        markedDates={{
          [data?.dateString] : {selected: true}
        }}
        theme={{
          selectedDayBackgroundColor: theme.colors.select_tab,
          selectedDayTextColor: theme.colors.white
        }}
        />
      </AreaCalendario>
      <AreaHorarios>
          <TituloHorario>Horários Disponíveis</TituloHorario>
          {profissionalSelected && data ? (
            <ListaHorarios
              data={horariosBase}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => 
                <ViewHorario selected={getHorarioSelected(item)} onPress={() => setHorarioSelected(item)}>
                  <TextoHorario selected={getHorarioSelected(item)}>{item}</TextoHorario>
                </ViewHorario>
              }
            />
          ) : (
            <Avisos>Selecione um profissional e uma data</Avisos>
          )}
      </AreaHorarios>
    </AreaBranca>
    <AreaBotao>
      <PrimaryButton titulo='Realizar agendamento' style={{borderRadius: 6}}  onPress={() => {realizarAgendamento()}}/>
    </AreaBotao>

   </Container>
  );
}