import { ActivityIndicatorProps, TextProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_bege};
   justify-content: flex-end;
`;

export const AreaTitulo = styled.View`

    width: ${wp('100%')}px;
    align-items: center;
    justify-content: center;
    height: ${hp('18%')}px;
    


`;
export const TextoDetalhes = styled.Text`

    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.black};
    font-family: 'Manrope';

`;
export const TextoEstabelecimento = styled.Text`

    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.white};
    font-weight: bold;
    font-family: 'Manrope';

`;
export const AreaBranca = styled.View`

    height: ${hp('75%')}px;
    background-color: ${({theme}) => theme.colors.white};

`;
export const AreaPartes = styled.View`

    width: ${wp('100%')}px;
    margin-left: ${wp('6%')}px;
    margin-top: ${hp('3%')}px;

`;

export const AreaButton = styled.View`

    width: ${wp('100%')}px;
    margin-top: ${hp('20%')}px;
    align-items: center;

`;

export const TextoParte = styled.Text`

    margin-bottom: ${hp('1.2%')}px;
    color: ${({theme}) => theme.colors.cinza_secundario};


`;

export const TextoResultado = styled.Text`

    color: ${({theme}) => theme.colors.black};
    font-weight: bold;
    font-size: ${RFValue(16)}px;

`;

export const ViewLoading = styled.View`


`;

export const Loading = styled.ActivityIndicator<ActivityIndicatorProps>`

`;

export const TextoLoading = styled.Text<TextProps>`

    font-size: ${RFValue(15)}px;
    font-family: 'Manrope'

`;