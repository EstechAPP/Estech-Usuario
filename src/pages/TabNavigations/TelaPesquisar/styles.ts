import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_screens};
   padding-top: ${getStatusBarHeight() + hp('4%')}px;
`;

export const AreaHeader = styled.View`

   width: ${wp('100%')}px;
   margin-left: ${wp('10%')}px;

`;

export const Titulo = styled.Text`
   font-family: "Manrope";
   font-size: ${RFValue(22)}px;
   font-weight: bold;
   color: ${({theme}) => theme.colors.black}
`;