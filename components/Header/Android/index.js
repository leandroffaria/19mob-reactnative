import React from 'react';

import Logo from '../../assets/mercado-livre.png';

import { View, Image } from 'react-native';
  
import Style from '../style';

const Header = () => { 
    return (
        <View style={ { ...Style.header, backgroundColor: '#93bb3a' } }>
            <Image style={ Style.image } source={ Logo } />
        </View>
    );
};

export default Header;