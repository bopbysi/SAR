import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, List, ListItem, } from "native-base";
import { connect } from "react-redux"

import ScreenContent from "../components/ScreenContent";

class Profile extends Component {
	render() {
		const { login, email, name } = this.props;

		console.log("=== PROFILE PROPS ===>", this.props)
		return (
			<ScreenContent>
				<List>
					<ListItem>
						<Text style={styles.listLabel}> Login:</Text>
						<Text>{login}</Text>
					</ListItem>
					<ListItem>
						<Text style={styles.listLabel}> E-mail adress:</Text>
						<Text>{email}</Text>
					</ListItem>
					<ListItem>
						<Text style={styles.listLabel}> Nom:</Text>
						<Text>{name}</Text>
					</ListItem>
					
				</List>
			</ScreenContent>
		);
	}
}

const styles = StyleSheet.create({
	listLabel: {
		fontWeight: "bold",
	},
});

const mapStateToProps = state => ({
	user: state.app.user,
});

export default (Profile);