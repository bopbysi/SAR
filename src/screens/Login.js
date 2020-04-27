import React, { Component } from "react"
import { View, Image, StyleSheet,  Text, TouchableOpacity } from "react-native";
import { Button, H3,  } from 'native-base'

import LoginForm from '../components/LoginForm'
import logo from "../assets/Logo-Signarama-app.png";





class Login extends Component {

	handleLoginFormSubmit = values => {
		console.log(values);

		// For now, fake Login Success and navigate to BeersList.
		this.props.navigation.navigate("MySurveyList");
	};

	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<Image source={logo} style={styles.logo} />

					{/* <Button style= {styles.Button}
						bordered
						light
						onPress={() => {
							this.props.navigation.navigate("MySurveyList");
						}}
					>
						<Text>Go to app</Text>
					</Button> */}
					<LoginForm onSubmit={ this.handleLoginFormSubmit}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screenContentWrapper: {
		flex: 1,
		backgroundColor: undefined,
		justifyContent: "center",
		
	},
	contentBox: {
		marginHorizontal: 50,
	},
	logo: {
		height: 150,
		width: "100%",
		// aspectRatio: 507 / 102,
		marginBottom: 100,
		
	},
	Button:{
		width:316,
		height:50,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: "#0B4F6C",
		backgroundColor: "#AF1E2D",
		marginBottom: 1, 
		color: '#AF1EDD'
	}
});

export default Login;