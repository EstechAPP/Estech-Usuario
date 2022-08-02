import styled from 'styled-components/native';
import { heightPercentageToDP as wp, widthPercentageToDP as hp } from 'react-native-responsive-screen';
import { ImageProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   width: 184px;
   height: 47px;
   background-color: ${({theme}) => theme.colors.background_cards};
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 4px;
   margin-right: 24px;
   padding-top: 6px;
   padding-bottom: 6px;
   padding-left: 16px;
   padding-right: 49px;
`;

export const FotoProfissional = styled.Image<ImageProps>`

    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    

`;
export const AreaNomeCargo = styled.View`



`;
export const NomeProfissional = styled.Text`

    font-family: 'Manrope';
    font-size: ${RFValue(10)}px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.cinza_titulo};

`;
export const CargoProfissional = styled.Text`

    font-family: 'Manrope';
    font-size: ${RFValue(10)}px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.cinza_secundario};

`;