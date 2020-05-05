import React, { Component } from "react";
import { View } from "react-native";
import { H3 } from "native-base";
import { connect } from "react-redux";
import UUIDGenerator from "react-native-uuid-generator";
import uuid from 'uuid/v4'


import ScreenContent from "../components/ScreenContent";
import SurveyAddForm from "../components/SurveyAddForm";


import { addSurvey } from "../store/actions/SurveyAction";

import dummyBeerImage from "../assets/dummy/beer3.png";


class SurveyAdd extends Component {

	// handleSurveyAddFormSubmit = values => {
	// 	UUIDGenerator.getRandomUUID().then(uuid => {
	// 		// First, add the beer.
	// 		this.props.addSurvey({
	// 			uuid: uuid,
	// 			createdAt: Date.now(),
	// 			editedAt: null,
	// 			deletedAt: null,
	// 			photo: dummyBeerImage,
	// 			...values,
	// 		});

	// 		// Then, redirect back to BeersList.
	// 		this.props.navigation.navigate("MySurveyList");
	// 	});
	// };

	handleSurveyAddFormSubmit = (values) => {
		const action = {type: "addSurvey", value: this.props.surveys}
		
		this.props.surveys({
						id: null,
						createdAt: Date.now(),
						editedAt: null,
						deletedAt: null,
						photo: dummyBeerImage,
						...values,
					});
		this.props.navigation.navigate("MySurveyList")
	};

	render() {
		console.log('==== SurveyAdd Prop ====>', this.props )
		console.log('==== SurveyAdd state ====>', this.state)
		return (
			<ScreenContent>
				<H3>Information Client</H3>
				<SurveyAddForm onSubmit={this.handleSurveyAddFormSubmit}/>
			</ScreenContent>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		surveys: data => dispatch(addSurvey(data)),
	};
};
export default connect(null, mapDispatchToProps)
(SurveyAdd);