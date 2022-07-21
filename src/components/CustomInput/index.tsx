import React from 'react';
import { TextInputProps } from 'react-native';

import {
 Input
} from './styles';

export function CustomInput({...rest} : TextInputProps){
return (
   <Input {...rest} />
  );
}