import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import Form from './Form'
class CardHeader extends Component {
    render() {
        return (
            // <View style={styles.headerGrapper}>
            // <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        YOUR MEMBERSHIP CARD
                    </Text>
                    <Text style={styles.headerSubText}>
                        Make your phone be your wallet
                    </Text>
                    
                </View>

            // </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#9C27B0',
        flex: 1,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerGrapper: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    headerSubText: {
        fontStyle: 'italic',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    buttonAdd: {
        fontSize: 24,
        textAlign: 'right',


    }
});
function mapPropsToState(state){
    return {
        isAdding : state.isAdding,
    }
}

export default CardHeader;