import { ImageBackgroundProps } from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: ${wp('92%')}px;
   height: 210px;
   background-color: ${({theme}) => theme.colors.background_bege};
   margin-bottom: 2%;
   border-radius: 4px;
`;

export const TouchCard = styled.TouchableOpacity`
   width: ${wp('92%')}px;
   height: 210px;
   background-color: ${({theme}) => theme.colors.background_bege};
   margin-bottom: 2%;
   border-radius: 4px;
`;


export const CapaEmpresa = styled.ImageBackground.attrs({
    imageStyle: {borderTopRightRadius: 4, borderTopLeftRadius: 4}
})<ImageBackgroundProps>`

   width: 100%;
   height: 89px;


`;

export const Header = styled.View`

   width: 100%;
   height: 92px;
   align-items: center;
   position: absolute;
   top: 60px;

`;

export const LogoEmpresa = styled.Image`

   width: 51px;
   height: 53px;
   background-color: white;
   border-radius: 51px;

`;

export const NomeFantasiaEmpresa = styled.Text`

   margin-top: 8px;
   text-align: center;
   width: 90%;

`;

export const AreaStatusHora = styled.View`

    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    bottom: 20px;

`;
export const ComponenteStatus = styled.View`


    flex-direction: row;
    align-items: center;

`;
export const PontoStatus = styled.View`

    width: 8px;
    height: 8px;
    background-color: ${({color}) => color};
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