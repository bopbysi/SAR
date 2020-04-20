import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'




import SimpleFace from '../Component/SimpleFace'

import SupportQuestion from '../../Component/Question/SupportQuestion'
import SupportReponse from '../Component/Reponse/SupportReponse'


const Stack = createStackNavigator()

function Navigation () {
        return(
            <NavigationContainer>
              <Stack.Navigator 
                initialRouteName="Simple Face"
                screenOptions={{ headerStyle:{
                  backgroundColor:'#AF1E2D'},
                  //bouton retour 
                  headerTintColor:'#fff',
                  headerTitleStyle:{fontWeight:'bold'},
                  headerTitleAlign: 'center',
                  headerTitleAllowFontScaling: true,
                }}
               >
                    <Stack.Screen name="Simple Face" component={SimpleFace} />
                    <Stack.Screen name="SupportReponse" component={SupportReponse}/>
                    <Stack.Screen name="SupportQuestion" component={SupportQuestion}/>
    
                </Stack.Navigator>
            </NavigationContainer>
        )
    }  


export default Navigation