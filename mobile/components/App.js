import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../common/redux/Actions';

import {
    Text,
    View
} from 'react-native';

class App extends Component {

    render() {
        return (
            <View>
                <Text>
                    {this.props.data}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => (
    {
        data: state.appReducer
    }
);

const AppComponent = connect(
    mapStateToProps,
    actions
)(App);

export default AppComponent;