
import { ADD_SURVEY, EDIT_SURVEY, DELETE_SURVEY } from "./actionTypes";

/**
 * Add a new survey
 * @param {object} data The survey data
 */
export const addSurvey = data => {
	return {
		type: ADD_SURVEY,
		data,
	};
};

/**
 * Edit a specific survey
 * @param {string} uid The survey unique ID
 * @param {object} data The new survey data
 */
export const editSurvey = (uid, data) => {
	return {
		type: EDIT_SURVEY,
		uid,
		data,
	};
};

/**
 * Delete a specific survey
 * @param {string} uid The survey unique ID
 */
export const deleteSurvey = uid => {
	return {
		type: DELETE_SURVEY,
		uid,
	};
};