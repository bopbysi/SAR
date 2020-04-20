import React from './node_modules/react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from './node_modules/react-native-elements'
import { useNavigation } from './node_modules/@react-navigation/native'




class SupportQuestion extends React.Component{
  constructor(props){
    super(props)
    this.state
  }

  
 
    render() {
      
      console.log('SupportQuestionProps',this.props)
        return(
          <TouchableOpacity
           style={styles.touchable_container}
           onPress={()=>{this.props.navigation.actions.navigate("SupportReponse")}}>
           <View style={styles.main_container}>
             
             <ListItem style= {styles.list_item_container}
                    title="Support"
                    bottomDivider
                    topDivider
                    chevron
                    rightTitle= "Bardage acier" 
                    
            />

           </View>
           </TouchableOpacity>
         

        )
    }
}

export default ( SupportQuestion )

const styles = StyleSheet.create ({
    touchable_container:{
      flex: 1,
    },
    scrollview_container:{
      flex: 1,  
      margin: 50,
    },
    main_container: {  
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },  
    list_item_container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    }
})