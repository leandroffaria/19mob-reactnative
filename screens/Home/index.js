import React, { Component } from 'react';
import { View } from 'react-native';

import Seasons from './components/Seasons';

class Home extends Component {
    state = {
        seasons: [],
    }

    componentDidMount() {
        // fetch()...

        // depois que o dado carregar, orderna de forma DESC e mostra os 10 primeiros.

        // this.setState({ seasons: DADO QUE EU QUERO SALVAR })
    }

    render() {
        return (
            <View>
                <Seasons 
                    data={ this.state.seasons }
                    handlerSeason={ this.props.navigation.navigate }
                />
            </View>
        );
    }
}

export default Home;