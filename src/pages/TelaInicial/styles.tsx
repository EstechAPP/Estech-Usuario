import styled from 'styled-components/native';
import { PrimaryButton } from '../../components/PrimaryButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_bege};
`;

export const AreaLogo = styled.View`

  height: ${hp('70%')}px;
  justify-content: center;
  align-items: center;

`;
export const EstechLogo = styled.Text`
   font-size: 40px;
   font-family: 'Montserrat';
   font-weight: 300;
`;
export const AreaInicio = styled.View`

    height: ${hp('70%')}px;
    width: ${wp('100%')}px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    flex-direction: column;
    padding-top: 29px;
    padding-left: 44px;
    padding-right: 44px;
    padding-bottom: ${getBottomSpace() + 44}px;


`;
export const ViewMensagem = styled.View`

    margin-bottom: ${hp('2%')}

`;

export const ButtonLogin = styled(PrimaryButton)`

`;
export const Mensagem = styled.Text`

    font-size: ${RFValue(21)}px;
    font-family: 'Manrope';
    font-weight: bold;
    text-align: center;


`;
export const ViewRegistrar = styled.View`

    margin-top: ${hp('4%')}px;
    flex-direction: row;

`;
export const TextoRegistrar = styled.Text`

    font-size: ${RFValue(12)}px;
    font-family: 'Manrope';


`;

export const TouchRegistrar = styled.TouchableOpacity`



`;

export const TextoTouch = styled.Text`

    color: ${({theme}) => theme.colors.primary_color_button};
    font-size: ${RFValue(13)}px;
    font-family: 'Manrope';

`;
