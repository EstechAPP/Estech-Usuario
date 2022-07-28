import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   background-color: ${({theme}) => theme.colors.background_screens};
   
`;

export const AreaHeader = styled.View`

`;

export const Titulo = styled.Text`
   font-family: "Manrope";
   font-size: ${RFValue(22)}px;
   font-weight: bold;
   margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 30 : 10 }px;
   color: ${({theme}) => theme.colors.black}
`;