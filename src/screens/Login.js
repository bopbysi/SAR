import React, { Component } from "react"
import { View, Image, StyleSheet,  Text, TouchableOpacity, Linking, ActivityIndicator, } from "react-native";
import { Button, H3,  } from 'native-base'
import { connect } from "react-redux"

import { login, clearMessages } from "../store/actions/app"
import FadeSlide from "../animations/FadeSlide"
import LoginForm from '../components/LoginForm'
import logo from "../assets/Logo-Signarama-app.png";





class Login extends Component {

	handleLoginFormSubmit = values => {
		console.log(values);
		this.props.clearMessages();
		this.props.login(values.username, values.password);

		// For now, fake Login Success and navigate to BeersList.
		this.props.navigation.navigate("MySurveyList");
	};

	componentDidUpdate() {
		const { user } = this.props;

		// We have a user and a token, so user just logged in.
		if (user && user.token) {
			this.props.clearMessages();
			this.props.navigation.navigate("MySurveyList");
		}
	}

	render() {
		console.log("LOGIN PROPS==>", this.props)
		return (
			<View style={styles.screenContentWrapper}>

				<View style={styles.contentBox}>
					<FadeSlide top={-200} delay={200}>
						<Image source={logo} style={styles.logo} />
					</FadeSlide>
					
					<FadeSlide top={200} delay={200}>
						<View style={styles.loginFormBox}>
							<LoginForm 
								onSubmit={this.handleLoginFormSubmit}
								disabled={this.props.loading}
							/>
							{this.props.loading && (
								<View style={styles.loadingContainer}>
									<ActivityIndicator
										animating={true}
										hidesWhenStopped={false}
										size="large"
										color={COLORS.purple}
									/>
								</View>
							)}
							{this.props.error && (
								<Text style={styles.errorMessage}>
									{this.props.error}
								</Text>
							)}
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
	},
	loadingContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255,255,255,.85)",
		justifyContent: "center",
	},
	errorMessage: {
		fontSize: 11,
		marginTop: 20,
		fontStyle: "italic",
		color: COLORS.red,
	},
});

const mapStateToProps = state => ({
	user: state.app.user,
	loading: state.app.ui.loading,
	error: state.app.ui.messages.login,
});

const mapDispatchToProps = dispatch => {
	return {
		login: (email, password) => dispatch(login(email, password)),
		clearMessages: () => dispatch(clearMessages()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);