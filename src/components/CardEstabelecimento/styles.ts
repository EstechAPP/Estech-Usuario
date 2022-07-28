import { ImageBackgroundProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as wp, widthPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: 189px;
   height: 189px;
   justify-content: center;
   align-items: center;
   padding-top: 13px; 
   padding-bottom: 13px; 
   padding-left: 10px; 
   padding-right: 10px; 
   margin-left: 22px;
`;


export const FotoEstabelecimento = styled.ImageBackground<ImageBackgroundProps>`

    width: 169px;
    height: 112px;
    justify-content: flex-end;
    padding-left: 5px;
    padding-bottom: 5px;

`;
export const Foto = styled.Image`



`;
export const AreaPontuacao = styled.View`


    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    width: 45px;
    height: 16px;
    justify-content: center;
    border-radius: 7px;


`;
export const TextoPontuacao = styled.Text`

    font-family: 'Manrope';

`;
export const TextoNomeEstabelecimento = styled.Text`

    font-size: ${RFValue(13)}px;
    font-weight: bold;
    font-family: 'Manrope';
    width: 100%;

`;
export const AreaStatusHora = styled.View`

    flex-direction: row;
    justify-content: space-between;
    width: 100%;

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

`;
export const TextoStatus = styled.Text`

    font-family: 'Manrope';
    margin-left: 6px;

`;
export const ComponenteHorario = styled.View`

    flex-direction: row;
    align-items: center;
    

`;
export const TextoHorario = styled.Text`

font-family: 'Manrope';

`;