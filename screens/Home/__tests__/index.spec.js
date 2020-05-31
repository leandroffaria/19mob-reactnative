import React from 'react';
import { render, wait } from '@testing-library/react-native';

import HomeScreen from '../index';

// mock safeareaview porque ele da warning quando renderiza
jest.mock('react-native-safe-area-context', () => ({
    SafeAreaView: ({ children }) => <>{children}</>,
}));

// mock função fetch porque não existe no node (server) apenas no client
global.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
        json: () => Promise.resolve(fakeData)
    })
);

// Mock do componente Seasons pq ele deveria ter um teste próprio. Não precisamos testar
jest.mock('../components/Seasons', () => () => 'Seasons');

// faz o Mock do Fecth.. fetch não existe no Node.
let fakeData = {};

// cria um mock das propriedades que o componente recebe
const mockProps = {
    navigation: {
        navigate: () => {},
    },
};

describe('Home -> Screen', () => {
    it('should be render snapshot with loading', () => {
        const { container } = render(<HomeScreen { ...mockProps } />);
        expect(container).toMatchSnapshot();
    });

    it('should be call seasons', async () => {
        fakeData = {
            MRData: {
                SeasonTable: {
                    Seasons: [{ season: 2020 }]
                }
            }
        };

        await wait(() => {
            element = render(<HomeScreen { ...mockProps } />)
        });
  
        const { container } = element;
        expect(container).toMatchSnapshot();
        
        global.fetch.mockClear();
        delete global.fetch;
    });
});