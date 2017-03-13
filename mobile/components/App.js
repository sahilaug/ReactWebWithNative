import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../common/redux/Actions';
import { Card } from 'nachos-ui';

import {
    Text,
    View
} from 'react-native';

class App extends Component {

    render() {
        return (
            <View>
                <Card footerContent={"This is just demo for UI"} />
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