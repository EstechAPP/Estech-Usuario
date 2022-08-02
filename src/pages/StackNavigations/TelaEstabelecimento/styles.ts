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

export const BackgroundEstabelecimento = styled.Image`

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


export const  AreaServicos = styled.View`


    width: ${wp('100%')}px;
    padding-left: ${wp('6%')}px;
    margin-top: ${hp('3%')}px;


`;

export const ListaProfissionais = styled.FlatList`

    width: ${wp('100%')}px;
    margin-left: ${wp('-6%')}px;
    padding-left: ${wp('6%')}px;
    margin-top: ${hp('1%')}px;


`;

export const ListaServicos = styled.FlatList`

    margin-left: ${wp('-6%')}px;
    margin-top: ${hp('1.5%')}px;
    height: ${hp('41%')}px;

`;

export const AreaTituloVerTudo = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${wp('87%')}px;

`;
export const TouchVerTudo = styled.TouchableOpacity`


`;
export const TextoVerTudo = styled.Text`

    color: ${({theme}) => theme.colors.select_tab}

`;
