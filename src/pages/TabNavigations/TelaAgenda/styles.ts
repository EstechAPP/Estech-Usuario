import { FlatListProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { IAgendamento } from '../../../types/agenda';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_screens};
   padding-top: ${getStatusBarHeight() + hp('4%')}px;
`;

export const AreaTitulo = styled.View`

   width: ${wp('100%')}px;
   margin-left: ${wp('10%')}px;
   margin-bottom: ${hp('3%')}px;


`;
export const Titulo = styled.Text`

   font-size: ${RFValue(22)}px;
   font-weight: bold;
   font-family: 'Manrope';

`;
export const ListaAgenda = styled.FlatList<FlatListProps<IAgendamento>>`



`;
