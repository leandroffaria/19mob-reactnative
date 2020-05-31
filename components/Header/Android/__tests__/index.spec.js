import React from 'react';
import { render } from '@testing-library/react-native';

import HeaderAndroid from '../index';
import Logo from '../../../../assets/mercado-livre.png';

const element = render(<HeaderAndroid logo={ Logo } />);

describe('Header -> Android', () => {
    it('should be image with mercado-livre.png', () => {
        const { getByTestId } = element;

        expect(getByTestId('image').props.source)
            .toEqual({ testUri: '../../../assets/mercado-livre.png' });
    });

    it('should be render snapshot', () => {
        const { container } = element;
        expect(container).toMatchSnapshot();
    });
});