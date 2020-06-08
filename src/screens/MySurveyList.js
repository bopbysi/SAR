import React, { Component } from "react";
import { Text, TouchableOpacity, View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Button, Icon, ListItem, Thumbnail, H3, Left, Body, Right, Container, Content } from "native-base";
import { connect } from 'react-redux';


import dummyData from '../utils/dummyData'
import { addSurvey } from "../store/actions/SurveyAction"

import SurveyCard from "../components/SurveyCard";

import logo from '../assets/Logo-Signarama-app.png';



class SurveyList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddSurveyButtonPress = () => {
		this.props.navigation.navigate("SurveyAdd");
	};
	

	render() {
		console.log('===================MY SURVEY LIST PROPS===============>', this.props)
		console.log('===================MY SURVEY LIST STATE===============>', this.state)
		return (
			<View>
				<View>
						<FlatList
							data={this.props.surveys}
							keyExtractor={(survey, index) => index.toString()}
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