import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const AreaFuncionarioServico = styled.View`

   width: 100%;
   align-items: center;
   flex: 0.3;


`;
export const AreaButtons = styled.View`

   width: 100%;
   align-items: center;
   justify-content: space-around;
   flex: 0.2;

`;

export const AreaRating = styled.View`

   flex: 0.2;

`; 

export const TouchNaoEnviar = styled.TouchableOpacity`

   margin-top: ${heightPercentageToDP('2%')}px;

`;

export const TextNaoEnviar = styled.Text`

   font-size: ${RFValue(12)}px;
   color: ${({theme}) => theme.colors.cinza_secundario};

`;

export const Titulo = styled.Text`

   font-size: ${RFValue(22)}px;
   font-weight: 700;
   font-family: ${({theme}) => theme.fonts.Primary_Font};


`;
export const Mensagem = styled.Text`

   margin-bottom: ${heightPercentageToDP('3%')}px;
   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-size: ${RFValue(16)}px;
   text-align: center;

`;

