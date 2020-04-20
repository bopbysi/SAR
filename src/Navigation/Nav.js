// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import SimpleFace from '../../Component/SimpleFace'
import SupportQuestion from '../../Component/Question/SupportQuestion'
import SupportReponse from '../../Component/Reponse/SupportReponse'




const StackNavigator = createStackNavigator({
  
  SimpleFace: {
    screen: SimpleFace,
    navigationOptions: {
      title: 'Simple Face '
      
    }
  },
  SupportQuestion: { 
    screen: SupportQuestion
  },
  SupportReponse: { 
    screen: SupportReponse
  },
  
},
{initialRouteName: "SimpleFace"})

export default createAppContainer(StackNavigator)