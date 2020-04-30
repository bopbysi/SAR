import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View, Text, StyleSheet } from "react-native";
import { Button, } from "native-base";

import TextInput from "../fields/TextInput";
import COLORS from "../utils/colors";

class SurveyAddForm extends Component {
	render() {
		return (
			<View>
				<View style={STYLES.formWrapper}>
					<Field
						name="client"
						label="Client"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="contact"
						label="Contact"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="adresse"
						label="Adresse"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="CP"
						label="CP"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="ville"
						label="Ville"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="commentaire"
						label="Commentaire"
						autoCorrect={true}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="téléphone"
						label="Téléphone"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>
					<Field
						name="email"
						label="Email"
						autoCorrect={false}
						component={TextInput}
						//validate={[required]}
					/>

				</View>
				<Button style={styles.ajouterSurveyButton} full  rounded onPress={this.props.handleSubmit}>
					<Text>ajouter un survey</Text>
				</Button>
			</View>
		);
	}
}

export default reduxForm({
	form: "SurveyAdd",
})(SurveyAddForm);

const styles = StyleSheet.create({
	ajouterSurveyButton: {
		backgroundColor: "#AF1E2D",
	}
})