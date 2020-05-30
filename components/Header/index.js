import { Platform } from 'react-native';

import HeaderAndroid from './Android';
import HeaderIOS from '/iOS';

const Header = Platform.select({
    ios: () => HeaderIOS,
    android: () => HeaderAndroid,
    default: () => HeaderAndroid,
});

export default Header;