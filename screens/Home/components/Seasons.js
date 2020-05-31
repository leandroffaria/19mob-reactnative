import React from 'react';

import { Button, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button: {
        marginBottom: 10
    }
});

const Seasons = ({ handlerSeason, years }) => {
    return years
        .map(({ season: year }) => (
            <Button 
                key={ `year-${year}` }
                style={ style.button }
                onPress={ () => handlerSeason('Season', { year })}
            >
                <Text>{ year }</Text>
            </Button>
        ));
}

export default Seasons;