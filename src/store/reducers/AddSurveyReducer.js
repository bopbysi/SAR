import { ADD_SURVEY, EDIT_SURVEY, DELETE_SURVEY } from "../actions/actionsTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SURVEY: {
			return [...state, action.data];
		}

		case EDIT_SURVEY: {
			return state.map(survey => {
				if (survey.uid === action.uid) {
					return {
						...survey,
						edited: true,
						editedAt: Date.now(),
						...action.data,
					};
				} else {
					return survey;
				}
			});
		}

		case DELETE_SURVEY: {
			return state.filter(survey => survey.uid !== action.uid);
		}

		default: {
			return state;
		}
	}
};

export default reducer;