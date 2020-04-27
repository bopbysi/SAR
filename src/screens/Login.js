import React, { Component } from "react"
import { View, Image, StyleSheet,  Text, TouchableOpacity } from "react-native";
import { Button } from 'native-base'

import logo from "../assets/Logo-Signarama-app.png";





class Login extends Component {
	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<Image source={logo} style={styles.logo} />

					<Button style= {styles.Button}
						bordered
						light
						onPress={() => {
							this.props.navigation.navigate("MySurveyList");
						}}
					>
						<Text>Go to app</Text>
					</Button>
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