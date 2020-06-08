import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

import TextInput from "../fields/TextInput"


import COLORS from "../utils/colors";


import { required } from "../../src/utils/formHelpers";

class LoginForm extends Component {
	render() {
		return (
			<View>
				<View style={STYLES.formWrapper}>
					<Field
						name="username"
						label="Identifiant"
						textContentType="username"
						autoCorrect={false}
						autoCapitalize="none"
						component={TextInput}
						icon="person"
						validate={[required]}
					/>
					<Field
						name="password"
						label="Mot de passe"
						textContentType="password"
						secureTextEntry={false}
						autoCorrect={false}
						autoCapitalize="none"
						component={TextInput}
						icon="key"
						validate={[required]}
					/>
				</View>
				<Button
					style={styles.connexionButton}
					full
					rounded
					onPress={this.props.handleSubmit}
					disabled={this.props.disabled}
				>
					<Text>Connexion</Text>
				</Button>
			</View>
		);
	}
}



export default reduxForm({
	form: "login",
})(LoginForm);

const styles = StyleSheet.create({
	connexionButton: {
		backgroundColor: "#AF1E2D",
	}
})