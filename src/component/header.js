import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { getFontSize, dynamicSize } from '../utils/responsive';

const Header = ({ title, navigation }) => {
    return (
        <View style={{ height: dynamicSize(45), justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'red' }}>
            <TouchableOpacity
                style={{ position: 'absolute', zIndex: 2000000, left: dynamicSize(30), width: dynamicSize(30), height: dynamicSize(30), justifyContent: 'center', borderRadius: 100, alignItems: 'center' }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={{}}
                    source={require('../assets/backwhite.png')}
                />
            </TouchableOpacity>
            <Text style={{
                fontSize: getFontSize(20),
                color: '#fff',
                fontWeight: '700'
            }}>{title ? title : 'Home'}</Text>
        </View>
    )
}

export default Header;