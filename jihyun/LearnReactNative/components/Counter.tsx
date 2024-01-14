import React from 'react';
import {View, Text, StyleSheet, Button, Touchable, TouchableOpacity} from 'react-native';

function Counter({count, onIncrease, onDecrease}:any){
    console.log(count);
  return(
        <View style={styles.wrapper}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>{count}</Text>
            </View>
                <TouchableOpacity onPress={onIncrease}>
                    <Text>1+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding:30}} onPress={onDecrease}>
                    <Text>1-</Text>
                </TouchableOpacity >
            </View>
    );

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    numberArea:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number:{
        fontSize: 72,
        fontWeight: 'bold',
    },
});

export default Counter;