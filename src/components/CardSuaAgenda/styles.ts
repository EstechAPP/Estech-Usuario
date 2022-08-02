import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: ${wp('80%')}px;
   height: 126px;
   border-radius: 4px;
   background-color: ${({theme}) => theme.colors.background_agenda};
   margin-bottom: 20px;
   justify-content: space-evenly;
   flex-direction: row;
   align-items: center;
`;

export const LogoEstabelecimento = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;

`;
export const AreaInfo = styled.View`

`;
export const AreaNome = styled.View`

    width: ${wp('55%')}px;


`;
export const TextoNome = styled.Text`

    font-size: ${RFValue(13)}px;
    width: ${wp('55%')}px;
    font-weight: bold;
    font-family: 'Manrope';

`;
export const AreaServico = styled.View`
    width: ${wp('55%')}px;
    height: 32px;

`;
export const TextoServico = styled.Text`

    font-size: ${RFValue(10)}px;
    font-family: 'Manrope';

`;
export const AreaPreco = styled.View`

    flex-direction: row;
    align-items: center;

`;
export const TextoPreco = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: 'Manrope';

`;
export const TextoValor = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: bold;
    font-family: 'Manrope';
`;

export const AreaDataAgendamento = styled.View`

    position: absolute;
    align-items: center;
    flex-direction: row;
    bottom: 2%;
    left: 2%;

`;
export const TextoData = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: 'Manrope';
    font-weight: bold;
    color: ${({theme}) => theme.colors.cinza_secundario};

`;
export const TextoHorario = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: 'Manrope';
    font-weight: bold;
    color: ${({theme}) => theme.colors.cinza_secundario};
    margin-left: ${wp('1.5%')}px;

`;