import React, { PropTypes } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

const propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonContainer}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity >
    );
};
Button.propTypes = propTypes;
const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
};

export { Button };
