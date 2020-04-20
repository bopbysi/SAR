import React from './node_modules/react'
import { StyleSheet, Text, View, } from 'react-native';
import { ListItem } from './node_modules/react-native-elements'

class EtatGeneralQuestion extends React.Component{

    render() {
        return(
        
           <View style={styles.main_container}>

             <ListItem style= {styles.list_item_container}
                    title="État Général"
                    bottomDivider
                    topDivider
                    chevron
                    onPress={()=>{this.props.navigation.navigate("EtatForm")}}
                    rightTitle= "azerty" />       

           </View>
        

        )
    }
}

export default ( EtatGeneralQuestion )

const styles = StyleSheet.create ({
    scrollview_container:{
      flex: 1,  
      margin: 50,
    },
    main_container: {  
      flex: 1,
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