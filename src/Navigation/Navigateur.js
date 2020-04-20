import { createSwitchNavigator, createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from "../screens/Login"

//La LoginStack contient uniquement l'écran Login
const LoginStack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions:{
        headerShown: false
      },
    },
  });

export default LoginStack