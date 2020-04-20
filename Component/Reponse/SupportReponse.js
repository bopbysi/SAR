import React from './node_modules/react';
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import {  CheckBox } from './node_modules/react-native-elements';

class Selected_Items_Array {
  constructor() {
    selectedItemsArray = [];
  }

  pushItem(option) {
    selectedItemsArray.push(option);
  }

  getArray() {
    return selectedItemsArray;
  }
}


class SupportReponse extends React.Component{ 
  constructor(props){
    super(props);
    Selected_Items_Array
    this.state = {
      CheckBox,
      checked:null,
      list:[
        {title:'Structure Acier', id:'1'},
        {title:'Bardage Bois', id:'2'}, 
        {title:'Structure Bois',id:'3'},
        {title:'Béton (maçonnerie)',id:'4' },
        {title:'Ondulé',id:'5' },
        {title:'Parpaings',id:'6'},
        {title:'Plan',id:'7'},
        {title:'Briques Creuses',id:'8'},
        {title:'A Cassettes',id:'9'},
        {title:'Pierre',id:'10'},
        {title:'Marbre',id:'11'},
      ]
    }
  }
  handleClick = (index) => () => {
    const { list } = this.state;
    
    list[index].checked = !this.state.list[index].checked
    this.setState({ list })
  }

  componentMount() {

    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.selectedArrayObject.pushItem({
          'key': this.props.keyValue,
          'label': this.props.label,
          'value': this.props.value
        });
      });
    }
    else {
      this.setState({ checked: false });
    }
  }

  toggleState(key, label, value) {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.selectedArrayObject.pushItem({ 'key': key, 'label': label, 'value': value });
      }
      else {
        this.props.selectedArrayObject.getArray().splice(this.props.selectedArrayObject.getArray().findIndex(x => x.key == key), 1);
      }
    });
  }




    render(){
      
        return(
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset='90'  >
            <ScrollView>
                {/* <ListItem style= {styles.ListItem}
                    checkBox
                    title="Bardage acier"
                    bottomDivider
                    topDivider
                    leftIcon={{}}/> */}

                <View style={styles.Item}>
                    <CheckBox style={styles.CheckBox}
                    KeyValue={1} label='Bardage Acier' value="Bardage Acier"
                    onPress={this.toggleState.bind(this, this.props.keyValue, this.props.label, this.props.value)} />
                    <Text style={styles.checkBoxText}>Bardage Acier</Text>
                </View>    
                {
                  this.state.list.map((item, i) => (
                    <View key={item.id} style={styles.Item}>
                    <CheckBox
                      style= {styles.CheckBox}
                      checked={item.checked}
                      onPress={this.handleClick(i)}
                    />
                    <Text  style={styles.checkBoxText}>{item.title}</Text>
                    </View>   
                  ))
                } 
                <View style={styles.Item}>
                    <CheckBox style={styles.CheckBox}/>
                    <TextInput 
                    style={ styles.textInput }
                    placeholder="Autres support plein"
                    placeholderTextColor = "darkgray"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    />
                </View>  
                <View style={styles.Item}>
                    <CheckBox style={styles.CheckBox}/>
                    <TextInput 
                    style={ styles.textInput }
                    placeholder="Autres support creux"
                    placeholderTextColor = "darkgray"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    />
                </View>  

                <View title='BOUTTON VALIDER' style={styles.container}>
                <TouchableHighlight underlayColor="#000" style={styles.selectedItemsButton} onPress={this.getSelectedItems}>
                <Text style={styles.selectedItemsButton_Text}> VALIDER </Text>
                </TouchableHighlight>
                </View>

                <Text style={{ fontSize: 20, color: "#000", marginTop: 20 }}> {this.state.selectedItems} </Text>
                


            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default(SupportReponse)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },
    ListItem:{
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },
    Item:{
      flexDirection:'row',  
      backgroundColor: 'white',
      width:"100%",
      alignItems:'center',
      borderColor:'#929496',
      borderTopWidth:1,
      borderEndWidth:1,
      
    },
    selectedItemsButton:
    {
      width:300,
      height:40,
      borderRadius:5,
      marginTop: 25,
      backgroundColor: '#AF1E2D',
      marginBottom:10 
    },

    selectedItemsButton_Text:
    {flex:1,
      color: 'white',
      textAlign: 'center',
      alignSelf: 'stretch',
      fontSize: 20,
      textAlignVertical:'center'
    },
    CheckBox:{
   
    }
    

  });