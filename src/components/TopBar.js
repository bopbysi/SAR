import React, { Component } from "react";
import { Alert, StyleSheet, Text, StatusBar  } from "react-native";
import { Header, Button, Left, Right, Body, Icon } from "native-base";
import COLORS from '../utils/colors'

class TopBar extends Component {
	/**
	 * When we click on the "Left icon" arrow
	 */
	handleIconPress = action => {
		switch (action) {
			default:
			case "goBack":
				this.props.navigation.goBack();
				break;

			case "searchBeers":
				Alert.alert("Search form coming soon...");
				break;

			case "seeProfile":
				this.props.navigation.navigate("Profile");
				break;

			case "logout":
				Alert.alert(
					"Ne partez pas...",
					"Êtes vous sûr de vouloir quittez l'application?",
					[
						{
							text: "Oui, me déconnecter",
							onPress: () => {
								this.props.navigation.navigate("Login");
							},
						},
						{
							text: "Annuler",
							onPress: () => {},
							style: "cancel",
						},
					],
					{ cancelable: false }
				);
				break;
		}
	};

	/**
	 * Render a single clickable button with icon
	 */
	renderIcon = icon => {
		if (!icon) {
			return null;
		}

		let iconName = "home";

		switch (icon) {
			default:
			case "goBack":
				iconName = "arrow-back";
				break;

			case "searchBeers":
				iconName = "search";
				break;

			case "seeProfile":
				iconName = "person";
				break;

			case "logout":
				iconName = "power";
				break;
		}
		
		return (
			<Button
				transparent
				onPress={() => {
					this.handleIconPress(icon);
				}}
			>
				<Icon name={iconName} />
			</Button>
		);
	};

	
	getTitle = () => {
		const { navigation } = this.props;

		if (navigation.state.routName === "SurveyDetails") {
			const survey = navgiation.getParam("survey", null);

			if(survey){
				return survey.name;
			}
		}

		return this.props.title
	}
	
	render() {
		const { leftActionIcon, rightActionIcon } = this.props;

		return (
			
			<Header noShadow style={styles.Header}>
				<StatusBar backgroundColor="#AF1E2D" barStyle="default"/>
				<Left>{this.renderIcon(leftActionIcon)}</Left>
				<Body>
					<Text style={styles.TextTitle}>{this.getTitle()}</Text>
				</Body>
				<Right>{this.renderIcon(rightActionIcon)}</Right>
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	Header: {
		backgroundColor: COLORS.rouge,
		
	},
	TextTitle:{
		color: 'white',
		fontSize: 26,
		fontFamily: "Roboto",
		fontWeight: "bold",
		width: 250,
		textAlign:'center'

	},
	StatusBar: {
		backgroundColor: COLORS.Rouge,
	}

});

export default TopBar;