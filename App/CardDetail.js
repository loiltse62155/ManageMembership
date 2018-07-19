import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet, StatusBar,
    Text, TouchableOpacity,
    View, Image
} from 'react-native';
 class CardDetail extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyItemHead}>
                        <View style={styles.itemName}></View>
                        <View style={styles.itemPhone}></View>
                        <View style={styles.BrandName}></View>
                    </View>
                    <View style={styles.bodyItemBody}>
                        <View style={styles.barcode}></View>
                        <View style={styles.barcodeNumber}></View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        backgroundColor: 'blue',
    },
    body:{
        flex:9,
    },
    bodyItemHead:{
        flex:1,
        backgroundColor: 'yellow',
    },
    bodyItemBody:{
        flex:3,
        backgroundColor: 'green',
    },
    itemName:{
        flex:1,
    },
    itemPhone:{
        flex:1,
    },
    BrandName:{
        flex:1,
    },
    barcode:{
        flex:3,
    },
    barcodeNumber:{
        flex:1,
    }

    



})

export default CardDetail;