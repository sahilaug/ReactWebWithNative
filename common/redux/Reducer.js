import { constants } from './Actions';
import data from '../../Data';

const initialState = data;

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case constants.CALCULATE_RESULT:
        {
            let correctAnswers = 0;
            const selectedValues = action.payload.selectedValues;
            for (var key in selectedValues) {
                if (selectedValues.hasOwnProperty(key)) {
                    let ques = state.get('questions').filter((i) => i.get('uuid') === key).first();
                    let correctAnswer = ques.get('options').filter((op) => op.get('correct')).first().get('uuid');
                    if(correctAnswer === selectedValues[key]) {
                        correctAnswers++;
                    }
                }
            }
            return state.set('data', {
                correctAnswers,
                incorrectAnswers:  state.get('questions').size - correctAnswers
            });
        }
        case constants.RESET_CHART:
        {
            return state.set('data', {})
        }
        default:
        {
            return state;
        }
    }
}