import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions,   } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import IconAnt from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialIcons'

//Screens Component
import SplashScreen from "../pages/StackNavigations/SplashScreen";
import TelaInicial from "../pages/StackNavigations/TelaInicial";
import TelaLogin from "../pages/StackNavigations/TelaLogin";
import TelaHome  from '../pages/TabNavigations/TelaHome';
import TelaPesquisar from '../pages/TabNavigations/TelaPesquisar';
import TelaAgenda from '../pages/TabNavigations/TelaAgenda';
import TelaPerfil from '../pages/TabNavigations/TelaPerfil';
import { TelaEstabelecimento } from '../pages/StackNavigations/TelaEstabelecimento';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { TelaTodosServicos } from '../pages/StackNavigations/TelaTodosServicos';
import { Agendamento } from '../pages/StackNavigations/Agendamento';
import { ConfirmaAgendamento } from '../pages/StackNavigations/ConfirmaAgendamento';
import { FimAgendamento } from '../pages/StackNavigations/FimAgendamento';




function TabNavigation(){
  const theme = useTheme();
  const Tab = createBottomTabNavigator();
  function NavigatorOptions(): BottomTabNavigationOptions{
    const options : BottomTabNavigationOptions ={
      headerShown: false,
      tabBarStyle:{
        backgroundColor: theme.colors.background_bege,
      },
      tabBarActiveTintColor: theme.colors.primary_color_button,
      tabBarInactiveTintColor: theme.colors.cinza_titulo,
      tabBarLabelStyle: {
        fontSize: 13
      }
    }
    return options;
  }

  return(
    <Tab.Navigator screenOptions={NavigatorOptions}>
      <Tab.Screen
        name='Inicio'
        component={TelaHome}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='home' color={color} size={size}/>)}}
      />
      <Tab.Screen
        name='Pesquisar'
        component={TelaPesquisar}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='search1' color={color} size={size}/>)}}
      />
      <Tab.Screen
        name='Agenda'
        component={TelaAgenda}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='calendar' color={color} size={size}/>)}}
      />
      <Tab.Screen
        name='Perfil'
        component={TelaPerfil}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='user' color={color} size={size}/>)}}
      />
    </Tab.Navigator>
  )

}


function RoutesNavigator() {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    function StackOptions(): NativeStackNavigationOptions{
      const options : NativeStackNavigationOptions = {
        headerTransparent: true,
        headerTitle: '',
        headerLeft: (props) => (
          <TouchableOpacity style={{width: 37, height: 37, backgroundColor: '#FFF', borderRadius: 18.5, alignItems: 'center', justifyContent: 'center'}} onPress={() => {navigation.goBack()}}>
            <Icon name='chevron-left' size={RFValue(28)} />
          </TouchableOpacity>
        )
      }
      return options;
    }
    
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TelaEstabelecimento"
          component={TelaEstabelecimento}
          options={StackOptions()}
        />
        <Stack.Screen
          name="TelaTodosServicos"
          component={TelaTodosServicos}
          options={StackOptions()}
        />
        <Stack.Screen
          name="Agendamento"
          component={Agendamento}
          options={StackOptions()}
        />
        <Stack.Screen
          name="ConfirmaAgendamento"
          component={ConfirmaAgendamento}
          options={StackOptions()}
        />
        <Stack.Screen
          name="FimAgendamento"
          component={FimAgendamento}
          options={StackOptions()}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  
  export default RoutesNavigator;