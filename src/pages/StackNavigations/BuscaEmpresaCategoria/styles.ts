import { FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { IEmpresa } from '../../../types/empresa';

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
    align-items: center;

`;

export const listaEmpresas = styled.FlatList<FlatListProps<IEmpresa>>`


`;