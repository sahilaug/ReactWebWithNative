import React, { Component } from 'react';
import BarChart from 'react-bar-chart';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data !== this.props.data) {
            this.setState({
                data: nextProps.data
            })
        }
    }

    render() {
        const margin = {top: 20, right: 20, bottom: 30, left: 40};
        if(this.state.data && Object.keys(this.state.data).length) {
            const barData = [
                {text: 'correct', value: this.state.data.correctAnswers},
                {text: 'incorrect', value: this.state.data.incorrectAnswers}
            ];
            return (
                <div style={{width: '50%'}}>
                    <BarChart
                        ylabel='Number'
                        width={500}
                        height={500}
                        margin={margin}
                        data={barData}
                    />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Chart;