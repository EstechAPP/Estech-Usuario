import { ImageProps } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { IButtonCategoria } from '.';

export const Container = styled.TouchableOpacity<IButtonCategoria>`
   width: 80px;
   height: 82px;
   align-items: center;
   flex-direction: column;
   margin-left: ${props => props.index == 0 ? wp('8%') : wp('5%')}px;

`;

export const AreaIcone = styled.View`

    width: 62px;
    height: 62px;    
    background-color: ${({theme}) => theme.colors.input_background};
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

export const ImagemIcone = styled.Image<ImageProps>`
    width: 42px;
    height: 42px;
`;

export const Titulo = styled.Text`

    font-size: 12px;
    text-align: center;
    margin-top: 5px;

`;