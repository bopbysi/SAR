import React, { Component } from "react";
import { View } from "react-native";
import { H3 } from "native-base";
import { connect } from "react-redux";
import UUIDGenerator from "react-native-uuid-generator";
import uniqueId from "../utils/uniqueId";



import ScreenContent from "../components/ScreenContent";
import SurveyAddForm from "../components/SurveyAddForm";


import { addSurvey } from "../store/actions/SurveyAction";

import dummyBeerImage from "../assets/dummy/beer3.png";


class SurveyAdd extends Component {

	handleSurveyAddFormSubmit = (values) => {	
			//Premièrement on ajoute la survey
			this.props.surveys({
				uid: Date.now(),
				createdAt: Date.now(),
				editedAt: null,
				deletedAt: null,
				photo: dummyBeerImage,
				...values,
			});
			//Puis on retourne sur la liste
			this.props.navigation.navigate("MySurveyList")	
	};

	render() {

		console.log('==== SurveyAdd Prop ====>', this.props )
		//console.log('==== SurveyAdd state ====>', this.state)
		
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