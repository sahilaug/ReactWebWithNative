import React  from 'react';
import { fromJS } from 'immutable';
import { Field, reduxForm } from 'redux-form';

const QuestionList = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            {getQuestions(props.questions, props)}
            <div className="columns">
                <button
                    type="submit"
                    className="column button is-large"
                    disabled={pristine || submitting}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="column button is-large"
                    disabled={pristine || submitting}
                    onClick={() => resetForm(reset, props.resetChart)}
                >
                    Clear Values
                </button>
            </div>
        </form>
    );
};

function resetForm(reset, resetChart) {
    reset();
    resetChart();
}

function getQuestions(questions, props) {
    const { error } = props;
    let returnObj = fromJS([]);
    questions.forEach((ques, index) => {
        returnObj = returnObj.push(
            <div className="message" key={ques.get('uuid')} >
                <div className="message-header">
                    { `${index + 1}. ${ques.get('qText')}` }
                </div>
                <div className="message-body">
                    <p className="control">
                        <span className="select">
                            <Field
                                name={ques.get('uuid')}
                                className="message"
                                component="select"
                            >
                                { getOptions(ques) }
                                {error && <strong>{error}</strong>}
                            </Field>
                        </span>
                    </p>
                </div>
            </div>
        );
    });
    return returnObj;
}

function getOptions(question) {
    const defaultOption = (<option key="'default">Choose Answer</option>);
    let returnObj = fromJS([]);
    returnObj = returnObj.push(defaultOption);
    question.get('options').forEach((option) => {
        returnObj = returnObj.push(
            <option
                value={ option.get('uuid') }
                key={ option.get('uuid') }
            >
                { option.get('opText') }
            </option>
        );
    });
    return returnObj;
}

export default reduxForm({
    form: 'QuestionListForm'
})(QuestionList);
