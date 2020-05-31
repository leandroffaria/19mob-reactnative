import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Seasons from '../Seasons';

const mockFn = jest.fn();
const mockYears = [
    { season: 2020 },
    { season: 2019 },
    { season: 2018 },
];

const element = render(<Seasons handlerSeason={ mockFn } data={ mockYears } />);

describe('Home -> components -> Seasons', () => {
    it('should be simulate click', () => {
        const { getByTestId } = element;

        const button = getByTestId('year-2020');
        fireEvent.press(button);
    });

    it('should be render snapshot', () => {
        const { container } = element;
        expect(container).toMatchSnapshot();
    });
});