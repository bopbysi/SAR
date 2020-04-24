import React, { Component } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Button, Text, Icon, Container, Content, Fab } from "native-base";
import { connect } from "react-redux";

import COLORS from '../utils/colors'
import { deleteSurvey } from '../store/actions/SurveyAction'
import ScreenContent from "../components/ScreenContent";
import logo from '../assets/Logo-Signarama-app.png'

class SurveyDetails extends Component {
    constructor(props){
        super(props);

        const survey = this.props.navigation.getParam('survey', null);

        this.state = {
                subMenuActive: false,
                survey
        };
    }

	// When we click on the Edit icon 
	handleIconEditPress = () => {
		// Redirect to BeerAdd with extra "beer" prop
	};

	 // When we click on the Photo icon
	handleIconPhotoPress = () => {
		//
	};

	// When we click on the Delete icon 
	handleIconDeletePress = () => {
		// First, delete the survey.
		this.props.deleteSurvey(this.state.survey.uid);

		// Then, redirect back to SurveyList.
		this.props.navigation.navigate("SurveyList");
	};
    
    renderSubMenu = () => {
        return(
            <Fab
                active={this.state.subMenuActive }
                direction='up'
                style={styles.subMenu}
                position='bottomRight'
                onPress={ () => 
                    this.setState({ 
                        subMenuActive: !this.state.subMenuActive,
                    }) }        
            >
                <Icon name='settings' style={styles.subMenuMainIcon}/>
                <Button
                    style={styles.subMenuIconEdit}
                    onPress={this.handleIconEditPress}
                >
                    <Icon name='create'/>
                </Button>
                <Button
                    style={styles.subMenuIconPhoto}
                    onPress={this.handleIconPhotoPress}
                >
                    <Icon name='image'/>
                </Button>
                <Button
                    style={styles.subMenuIconDelete}
                    onPress={this.handleIconDeletePress}
                >
                    <Icon name='trash'/>
                </Button>
                
            </Fab>
        )
    }

	render() {
        const{ survey } = this.state;
        
        // if ( !survey ) {
        //     return null
        // }

		return (
            <View style={styles.contentWrapper}>
                <View style={styles.heroWrapper}>
                    <ImageBackground
                        source={logo}
                        style={styles.heroBackground}
                        imageStyle={styles.heroBackgroundImage}
                        resizeMode='cover'
                    >
                        <View style={styles.header}>
                            <Text style={styles.headerMainText}> 
                                 TITRE DU SURVEY
                            </Text>
                            <Text style={styles.headerSubText}>
                                réalisé par Bopby 
                            </Text>
                            <Text style={styles.headerSubText}>
                                le 17/01/1990
                            </Text>
                        </View>        
                    </ImageBackground>
                    {this.renderSubMenu()}
                </View>
                <ScreenContent containerStyle={styles.screenContent}>
			    	<Text>Survey Details</Text>
                    <Text>JSON.stringify(survey, undefined, 2)</Text>
			    </ScreenContent>
            </View>
			
		);
	}
}

export default SurveyDetails;

const styles = StyleSheet.create({
	contentWrapper: {
		flex:1,
    },
    heroWrapper: {
		paddingBottom: 45,
		marginBottom: -15,
    },
    subMenu: {
		backgroundColor: COLORS.gray,
    },
    subMenuMainIcon: {
        color: COLORS.black,
    },
    subMenuIconEdit:{
        backgroundColor: COLORS.yellow,
    },
    subMenuIconPhoto:{
        backgroundColor: COLORS.yellow,
    },
    subMenuIconDelete:{
        backgroundColor: COLORS.rouge,
    },
    heroBackground: {
        height: undefined,
        width:"100%",
        aspectRatio: 100 / 50,
        //overflow: "hidden"  
    },
    heroBackgroundImage: {
        //bottom: "-100%"
    },
    header: {
        backgroundColor: "rgba(175, 30, 45, 0.35)",
        flex:1,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    headerMainText: {
        fontSize: 30,
        marginTop:'auto',
        color: "#ffffff",
    },
    headerSubText: {
        fontSize:12,
        textAlign:"left",
        color:"#ffffff"
    },
    screenContent: {
		paddingTop: 0,
	},


});