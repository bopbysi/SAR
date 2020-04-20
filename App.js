import React from 'react';

import { createSwitchNavigator, createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Loading from './src/screens/Loading'
import Login from './src/screens/Login'
import MySurveyList from './src/screens/MySurveyList'
import SurveyAdd from './src/screens/SurveyAdd'
import Profile from './src/screens/Profile'

import TopBar from './src/components/TopBar'

//La LoginStack contient uniquement l'écran Login
const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown: false
    },
  },
});

//L'AppStack avec tous les écrans, accessible une fois que l'on est loggué
const AppStack = createStackNavigator({
  MySurveyList: {
    screen: MySurveyList,
    navigationOptions: ({ navigation }) => ({
      header : () => (
        <TopBar
                navigation={ navigation }
                title = "Mes Surveys"
                leftActionIcon="searchSurvey"
                rightActionIcon="seeProfile"
        />
      ),
    }),
  },
  SurveyAdd: {
    screen: SurveyAdd,
    navigationOptions: ({ navigation }) => ({
      header : () => (
        <TopBar
                navigation={ navigation }
                title = "Ajouter un survey"
                leftActionIcon="goBack"
                
        />
      ),
    }),
  },
  Profile: {
		screen: Profile,
		navigationOptions: ({ navigation }) => ({
			header: () => (
				<TopBar
					navigation={navigation}
					title="Profile"
					leftActionIcon="goBack"
					rightActionIcon="logout"
				/>
			),
		}),
	},
})

 var AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			Loading: Loading,
			Login: LoginStack,
			App: AppStack,
		},
		{
			initialRouteName: "Loading",
		}
	)
)




export default class App extends React.Component {

  render(){
    
    return (
      
        <AppContainer/>
       
    );
  } 
}

