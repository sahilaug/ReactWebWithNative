import React, { Component } from 'react';
import { actions } from '../../common/redux/Actions';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import Chart from './Chart';

class App extends Component {

    constructor() {
        super();
        this.calculateResult = this.calculateResult.bind(this);
        this.state = {
            error: ''
        };
    }

    calculateResult(values) {
        if(Object.keys(values).length < this.props.questions.size) {
            this.setState({
                error: "Select all answers before submitting"
            });
        } else {
            this.setState({
                error: ""
            });
            this.props.calculateResult({ selectedValues: values });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="section has-text-centered">
                    <h1 className="title is-1">
                        Cricket Trivia
                    </h1>
                </div>
                <div>
                    <h1 className="title is-4 danger has-text-centered">
                        {this.state.error}
                    </h1>
                </div>
                <div className="section">
                    <div className="columns">
                        <QuestionList
                            className="column is-half p30"
                            questions={this.props.questions}
                            onSubmit={this.calculateResult}
                            resetChart={this.props.resetChart}
                        />
                        <Chart className="column is-half" data={this.props.data}  />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.appReducer.get('questions'),
        data: state.appReducer.get('data')
    }
};

const AppComponent = connect(
    mapStateToProps,
    actions
)(App);

export default AppComponent;