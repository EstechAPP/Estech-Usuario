import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_bege};
   justify-content: space-between;
`;

export const AreaLottie = styled.View`

    width: ${wp('100%')}px;
    height: ${hp('30%')}px;
    margin-top: ${getStatusBarHeight() + hp('10%')}px;

`;

export const AreaMensagem = styled.View`

    width: ${wp('100%')}px; 
    align-items: center;

`;
export const TextoStatus = styled.Text`

    font-size: ${RFValue(20)}px;
    font-weight: 500;
    font-family: 'Manrope';
    color: ${({theme}) => theme.colors.black};
    text-align: center;


`;
export const TextoMensagem = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: 'Manrope';
    color: ${({theme}) => theme.colors.black};
    text-align: center;
    margin-top: ${hp('2%')}px;

`;
export const AreaButton = styled.View`

    margin-bottom: ${getBottomSpace()}px;
    align-items: center;

`;