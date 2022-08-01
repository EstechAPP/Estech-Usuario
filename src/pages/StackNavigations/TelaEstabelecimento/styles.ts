import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
`;

export const Header = styled.View`

    position: absolute;
    margin-top: ${getStatusBarHeight() + hp('15%')}px;
    align-items: center;
    width: ${wp('54%')}px;
    

`;

export const BackgroundEstabelecimento = styled.View`

    background-color: red;
    height: ${hp('25%')}px;
    width: ${wp('100%')}px;


`;
export const FotoEstabelecimento = styled.Image`

    width: 94px;
    height: 94px;
    border-radius: 4px;

`;
export const NomeEstabelecimento = styled.Text`

    font-size: ${RFValue(16)}px;
    font-weight: bold;
    font-family: 'Manrope';
`;
export const AreaStatusHora = styled.View`

    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: ${hp('1.2%')}px;
`;
export const ComponenteStatus = styled.View`

    flex-direction: row;
    align-items: center;

`;
export const PontoStatus = styled.View`

    width: 8px;
    height: 8px;
    background-color: ${({theme}) => theme.colors.verde_open};
    border-radius: 4px;
    margin-right: 6px;

`;
export const TextoStatus = styled.Text`



`;
export const ComponenteHorario = styled.View`

    flex-direction: row;
    align-items: center;

`;
export const TextoHorario = styled.Text`

    margin-left: 6px;

`;

export const Separador = styled.View`


    height: ${hp('15%')}px;
    

`;

export const  AreaProfissionais = styled.View`


    width: ${wp('100%')}px;
    padding-left: ${wp('6%')}px;


`;

export const Titulo = styled.Text`

    font-size: ${RFValue(20)}px;
    font-weight: bold;
    font-family: 'Manrope';


`;

