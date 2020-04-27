import React from 'react';
import { Root } from 'native-base'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { createSwitchNavigator, createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//Import Screens
import Loading from './src/screens/Loading'
import Login from './src/screens/Login'
import MySurveyList from './src/screens/MySurveyList'
import Profile from './src/screens/Profile'
import SurveyAdd from './src/screens/SurveyAdd'
import SurveyDetails from './src/screens/SurveyDetails'
import Brouillon from './src/screens/Brouillon'


//Import Components
import SurveyCard from './src/components/SurveyCard'
import TopBar from './src/components/TopBar'

//Import Store
import { store, persistor } from './src/store/configureStore'


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
                leftActionIcon="searchBeers"
                rightActionIcon="seeProfile"
        />
      ),
    }),
  },
  SurveyDetails: {
    screen: SurveyDetails,
    navigationOptions: ({ navigation }) => ({
      header : () => (
        <TopBar
                navigation={ navigation }
                title = "Single Survey"
                leftActionIcon="goBack"
                
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
      SurveyDetails:SurveyDetails
		},
		{
			initialRouteName: "Loading",
		}
	)
)




export default class App extends React.Component {

  render(){
    
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
             <Root>
                <AppContainer/>
             </Root>    
          </PersistGate>
        </Provider>
        
       
    );
  } 
}

