import React, { Component } from "react"
import { View, Image, StyleSheet,  Text, TouchableOpacity, Linking } from "react-native";
import { Button, H3,  } from 'native-base'

import FadeSlide from "../animations/FadeSlide"
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
					<FadeSlide top={-200} delay={200}>
						<Image source={logo} style={styles.logo} />
					</FadeSlide>
					<FadeSlide top={200} delay={200}>
						<View style={styles.loginFormBox}>
							<LoginForm onSubmit={ this.handleLoginFormSubmit}/>
						</View>
					</FadeSlide>
				</View>

				<TouchableOpacity
					style={styles.creditsContainer}
					onPress={() => {
						Linking.openURL("http://signarama.fr")
					}}
				>
					<Text style={styles.creditsText}>
						Made by Bopby Sisongkham - Signarama.fr
					</Text>	
				</TouchableOpacity>

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
	},
	loginFormBox:{
		marginBottom:30,
	},
	creditsContainer:{
		position: "absolute",
		bottom: 20,
		left: 5,
		right:5
	},
	creditsText:{
		textAlign: "center",
		color:"rgba(0,0,0,.25)",
		fontSize:10
	}
});

export default Login;