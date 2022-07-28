import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Input = styled.TextInput`
   width: 306px;
   height: 47px;
   background-color: ${({theme}) => theme.colors.input_background};
   padding-left: 10px;
   border-radius: 4px;
   
`;