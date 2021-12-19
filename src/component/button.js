import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { getFontSize, dynamicSize } from '../utils/responsive';

export default button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: dynamicSize(45),
        width: dynamicSize(100),
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: dynamicSize(10)
    },
    buttonText: {
        fontSize: getFontSize(18),
        color: '#fff',
        fontWeight: '700'
    }
});