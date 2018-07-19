import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandName: '',
            barcode: ''
        };
      //  this.onAdd = this.onAdd.bind(this);
    }
     title = this.props.isUpdating ? "Update" : "Add";
    onAdd() {
        const { brandName, barcode, id } = this.state;
        if(this.title === 'Add')
        this.props.dispatch({type: 'ADD_CARD', brandName, barcode})
        if(this.title === 'Update')
        this.props.dispatch({type:'UPDATE_CARD', brandName, barcode, id})
    }
   

    render() {
       
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.brandName}
                    onChangeText={text => this.setState({ brandName: text })}
                    {...console.log(this.state.brandName)}
                    placeholder="Your brand name"
                />
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.barcode}
                    onChangeText={text => this.setState({ barcode: text })}
                    placeholder="Your barcode number"
                />
                <TouchableOpacity onPress={
                this.onAdd.bind(this) 
                }
                    
                    >
                    <Text>{this.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapPropsToState(state){
    return {
        isAdding : state.isAdding,
        isUpdating: state.isUpdating,
        arrayCards: state.arrayCards,
    }
}

export default connect(mapPropsToState)(Form);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 400,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10,
    }
});
