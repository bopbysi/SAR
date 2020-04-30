import React, { Component } from "react";
import { Text, TouchableOpacity, View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Button, Icon, ListItem, Thumbnail, H3, Left, Body, Right, Container, Content } from "native-base";
import { connect } from 'react-redux';

import SurveyCard from "../components/SurveyCard";
import ScreenContent from "../components/ScreenContent";
import logo from '../assets/Logo-Signarama-app.png';


const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  name: 'First Item',
	  photo: logo,
	  comment: 'ici un début de commentaire',
	  date: '17/01/1990',
	  
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  name: 'Second Item',
	  photo: logo,
	  comment: 'ici un début de commentaire',
	  date: '31/12/2019',
	},
	{
	  id: '58694a0f-3da1-471f-bd96-145571e29d72',
	  name: 'Third Item',
	  photo: logo,
	  comment: 'ici un début de commentaire',
	  date: '24/04/2020',
	},
  ];
class SurveyList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddSurveyButtonPress = () => {
		this.props.navigation.navigate("SurveyAdd");
	};



	

	render() {
		console.log('===================MY SURVEY LIST PROPS===============>', this.props.survey)
		return (
			<View>
				<View>
						<FlatList
							data={DATA}
							renderItem= {({ item }) => (
								<SurveyCard
									item={item}
									onPress={() => {
										this.props.navigation.navigate(
											"SurveyDetails",
											{
												survey: item
											}
										)
									}}
								/>	
							)}
						/>	
					</View>	
					
					<Button
						style={styles.addButton}
						rounded
						danger
						inconLeft
						
						onPress={this.handleAddSurveyButtonPress}
					>
						<Icon name="add" />
						{/* <Text style={styles.textAddButton}>survey</Text> */}
					</Button>
				
				
			</View>
		);
	}
}

const mapStateToProps = state => ({
	surveys: state.surveys,
});


export default connect(mapStateToProps)(SurveyList);

const styles = StyleSheet.create({
	addButton: {
		 position: "absolute",
		 bottom: -100,
		 right: 30,
		 
	},
	textAddButton: {
		textAlign: 'center'
	},
});