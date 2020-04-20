import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";

import ScreenContent from "../components/ScreenContent";

class Login extends Component {
	render() {
		return (
			<ScreenContent>
				<Text>Profile Utilisateur</Text>
			</ScreenContent>
		);
	}
}

export default Login;