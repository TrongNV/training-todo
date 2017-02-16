import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class AddTask extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Add new task"
                        multiline
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        padding: 5,
    },
    textInputStyle: {
        width: 300,
        height: 200
    }
};

export default AddTask;
