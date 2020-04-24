import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Body, Left, Right, Thumbnail } from "native-base";
import COLORS from '../utils/colors'

export default (SurveyCard = ({ item, onPress }) => (
	<ListItem thumbnail key={item.uid} button onPress={onPress}>
		<Left>
			<Thumbnail square source={item.photo} />
		</Left>
		<Body>
			<Text>{item.name}</Text>
			<Text note numberOfLines={1}>
				{item.comment}
			</Text>
		</Body>
		<Right>
			<View style={styles.date}>
				<Text style={styles.dateText}>{item.date}</Text>
			</View>
		</Right>
	</ListItem>
));

const styles = StyleSheet.create({
	date: {
		backgroundColor: COLORS.gray,
		borderRadius: 50,
		width: 60,
	},
	dateText: {
		fontSize: 9,
		textAlign: "center",
		paddingVertical: 9,
	},
});