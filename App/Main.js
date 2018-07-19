import React, { Component } from 'react';
import {
  StyleSheet, StatusBar,
  View, FlatList, TouchableOpacity, Text
} from 'react-native';
import ItemBarcodeCard from './ItemBarcodeCard'
import { connect } from 'react-redux';
import CardHeader from './CardHeader';
import Form from './Form'
class Main extends Component {
  getCardList() {
    const { myCards } = this.props;
    return myCards;
  }
  render() {
    const sign = this.props.isAdding ? '+Thêm card' : 'x Đóng';
    return (
        <View style={styles.container}>
          <StatusBar
            backgroundColor="#7B1FA2"
            barStyle="light-content"
          />
         <CardHeader/>
         {/* <Form/> */}
          <View style={{ flex: 9, backgroundColor: '#E1BEE7' }}>
          <View >
                        <TouchableOpacity onPress = {() => {
                          this.props.dispatch({type: 'TOGGLE_ISADDING'})
                        }} >
                            <Text style={styles.buttonAdd}>{sign}</Text>
                        </TouchableOpacity>
                    </View>
                   {!this.props.isAdding ? <Form/> : null} 
                   {this.props.isUpdating ? <Form/> : null}
            <FlatList
              data={this.getCardList()}
              renderItem={({ item }) => <ItemBarcodeCard myCards={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
function mapStateToProps(state) {
    return {
    isShow: state.isShow,
    myCards: state.arrayCard,
    isAdding: state.isAdding,
    isUpdating: state.isUpdating,
  
  };
}
export default connect(mapStateToProps)(Main);