import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ImageProps, FlatList, FlatListProps, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as dp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { IButtonCategoria } from '../../../components/ButtonCategoria';


export const Container = styled.View`
   flex: 1;
   align-items: center;
   background-color: ${({theme}) => theme.colors.background_screens};
`;

export const AreaHeader = styled.View`
   margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 30 : 10 }px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: ${wp('85%')}px;
`;
export const AreaMensagemNome = styled.View`


`;
export const TextoMensagem = styled.Text`

   font-family: "Manrope";
   font-size: ${RFValue(14)}px;

`;
export const TextoNome = styled.Text`

   font-family: "Manrope";
   font-size: ${RFValue(22)}px;
   font-weight: bold;


`;

export const FotoUsuario = styled.Image<ImageProps>`
   width: 56px;
   height: 56px;
   border-radius: 3px;

`;

export const AreaCategorias = styled.View`

   margin-top: ${dp('5%')}px;
   width: ${wp('100%')}px;
   padding-left: ${wp('8%')}px;


`;

export const Titulo = styled.Text`

   font-size: ${RFValue(20)}px;
   font-weight: bold;
   font-family: 'Manrope'

`;

export const AreaEstabelecimentos = styled.View`

   margin-top: ${dp('5%')}px;
   width: ${wp('85%')}px;

`;

export const ListaAgenda = styled(FlatList)<FlatListProps<IButtonCategoria>>`

   margin-left: ${wp('-8%')}px;
   margin-top: ${wp('3%')}px;
`;