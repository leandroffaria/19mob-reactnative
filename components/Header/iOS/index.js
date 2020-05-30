import React from 'react';

import { View, Image } from 'react-native';

import Logo from '../../assets/mercado-livre.png';

import Style from '../style';

const Header = () => { 
    return (
        <View style={ { ...Style.header, backgroundColor: '#3c74d7' } }>
            <Image style={ Style.image } source={ Logo } />
        </View>
    );
};

export default Header;