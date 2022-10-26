import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { IServico } from '../../../types/servico';


export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_bege};
   padding-top: ${getStatusBarHeight()}px;
   justify-content: flex-end;
`;

export const AreaTitulo = styled.View`

   width: ${wp('100%')}px;
   justify-content: center;
   margin-left: 20px;
   margin-bottom: 20px;

`;
export const TextoTitulo = styled.Text`

   font-size: ${RFValue(20)}px;
   color: ${({theme}) => theme.colors.white};
   font-weight: bold;
   font-family: 'Manrope';

`;
export const AreaBranca = styled.View`

   width: ${wp('100%')}px;
   height: ${hp('82%')}px;
   background-color: ${({theme}) => theme.colors.white};
   align-items: center;

`;
export const AreaTituloServico = styled.View`

   flex-direction: row;
   justify-content: space-between;
   width: ${wp('90%')}px;
   align-items: center;
   margin-top: 27px;

`;
export const TextoServico = styled.Text`

   font-size: ${RFValue(20)}px;
   color: ${({theme}) => theme.colors.black};
   font-weight: bold;
   font-family: 'Manrope';

`;
export const TextoTotal = styled.Text`

   font-size: ${RFValue(12)}px;
   color: ${({theme}) => theme.colors.cinza_secundario};
   font-weight: bold;
   font-family: 'Manrope';

`;
export const ListaServicos = styled(FlatList as new () => FlatList<IServico>)`

   width: ${wp('100%')}px;
   margin-top: ${hp('2%')}px;

`;