import { PixelRatio, ScrollViewProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_bege};
`;

export const AreaTituloTela = styled.View`

   width: ${wp('100%')}px;
   height: ${hp('20%')}px;
   justify-content: flex-end;
   margin-left: 20px;
   margin-bottom: 20px;

`;
export const TituloAgendamento = styled.Text`

   color: ${({theme}) => theme.colors.white};
   font-size: ${RFValue(14)}px;
   font-weight: bold;
   font-family: 'Manrope';

`;
export const TituloEstabelecimento = styled.Text`

   color: ${({theme}) => theme.colors.white};
   font-size: ${RFValue(20)}px;
   font-weight: bold;
   font-family: 'Manrope';

`;
export const AreaBranca = styled.ScrollView<ScrollViewProps>`

   background-color: ${({theme}) => theme.colors.white};

`;
export const AreaServico = styled.View`

   width: ${wp('100%')}px;
   align-items: center;
   margin-top: ${hp('2%')}px;


`;
export const TituloServico = styled.Text`

   color: ${({theme}) => theme.colors.black};
   font-size: ${RFValue(15)}px;
   font-weight: bold;
   font-family: 'Manrope';
   margin-bottom: 9px;

`;
export const AreaProfissional = styled.View`

   width: ${wp('100%')}px;
   padding-left: ${wp('6%')}px;


`;
export const TituloEscolha = styled.Text`
   
   color: ${({theme}) => theme.colors.black};
   font-size: ${RFValue(15)}px;
   font-weight: bold;
   font-family: 'Manrope';
   margin-bottom: 9px;

`;
export const ListaProfissionais = styled.FlatList`



`;
export const AreaCalendario = styled.View`

   margin-top: ${wp('6%')}px;

`;

export const AreaBotao = styled.View`

   background-color: ${({theme}) => theme.colors.white};
   height: ${hp('12%')}px;
   padding-bottom: ${getBottomSpace()}px;
   align-items: center;
   justify-content: center;

`;

export const TituloData = styled.Text`
   margin-left: ${wp('6%')}px;
   color: ${({theme}) => theme.colors.black};
   font-size: ${RFValue(15)}px;
   font-weight: bold;
   font-family: 'Manrope';
   margin-bottom: 9px;

`;

export const AreaHorarios = styled.View`

   width: ${wp('100%')}px;
   margin-top: ${hp('2%')}px;


`;
export const TituloHorario = styled.Text`

   margin-left: ${wp('6%')}px;
   color: ${({theme}) => theme.colors.black};
   font-size: ${RFValue(15)}px;
   font-weight: bold;
   font-family: 'Manrope';
   margin-bottom: 9px;

`;
export const ListaHorarios = styled.FlatList`



`;
export const ViewHorario = styled.TouchableOpacity`

   width: 87px;
   height: 32px;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   border-width: 1px;
   border-color: ${({theme}) => theme.colors.cinza_secundario};
   margin-left: 21px;
   margin-bottom: ${hp('5%')}px;


`;
export const TextoHorario = styled.Text`

   color: ${({theme}) => theme.colors.black};
   font-size: ${RFValue(14)}px;
   font-weight: bold;
   font-family: 'Manrope';


`;