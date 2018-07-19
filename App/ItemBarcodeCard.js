import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { connect } from 'react-redux';
class ItemContainer extends Component {
    constructor(props) {
        super(props)
    }
    getIndexOfItem(barcode){
        for(let i = 0; i<this.props.arrayCard; i++){
            if(barcode === this.props.arrayCard[i].barcode){
                return i;
            }
        }
    }
    render() {
        const { brandName, barcode, isShow, id } = this.props.myCards;
        const display = isShow ? 'block' : 'none';
        return (
            <View style={styles.itemContainer}>

                <View style={styles.itemHeaderContainer}>
                    <TouchableOpacity onPress= {()=>{
                       this.props.dispatch({type: 'TOGGLE_ISUPDATING'})
                    }}>
                        <Text>///</Text>
                    </TouchableOpacity>
                    <Text style={styles.itemHeader}>{brandName}</Text>
                    <TouchableOpacity onPress={() => {
                        pos = this.getIndexOfItem(barcode);
                        this.props.dispatch({type:'REMOVE_ITEM', id})
                    }}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemBody}>
                    <TouchableOpacity>

                        <Barcode value={`${barcode}`} format="CODE128" style={{ display: 'none' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.itemFooter}>{barcode}</Text>
                </View>
            </View>
        )
    }
}

function mapStateToProp(state) {
    return {
        isShow: state.isShow,
        arrayCard: state.arrayCard,
    }
}

export default connect(mapStateToProp)(ItemContainer);
const styles = StyleSheet.create({
    itemContainer: {
        width: 390,
        height: 150,
        backgroundColor: 'white',
        margin: 10,
        

    },
    itemHeaderContainer: {
        backgroundColor: '#9E9E9E',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemHeader: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemFooter: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBody: {
        backgroundColor: 'white',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barcodeImg: {
        flex: 1,
        width: 370,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
})