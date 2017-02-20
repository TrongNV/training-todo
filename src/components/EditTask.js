import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const propTypes = {
    item: PropTypes.object.isRequired
};

class EditTask extends Component {

    componentWillMount() {
        this.setState({
            text: this.props.item.content,
            id: this.props.item._id
        });
    }

    onSavePressed = () => {
        const { text, id } = this.state;
        fetch(`http://45.117.160.28:3330/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                content: text
            })
        })
            .then((response) => {
                console.log(response);
                Actions.todoList({ type: 'reset' });
            })
            .catch(error => console.log(error.message));
    }

    onResolvedPressed = () => {
        const { id, text } = this.state;
        fetch(`http://45.117.160.28:3330/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                resolved: true,
                content: text
            })
        })
            .then((response) => {
                console.log(response);
                Actions.todoList({ type: 'reset' });
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Add new task"
                        multiline
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        onPress={this.onSavePressed}
                        style={styles.buttonStyle}
                    >
                        <Text>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onResolvedPressed}
                        style={styles.buttonStyle}
                    >
                        <Text>Resolved</Text>
                    </TouchableOpacity>
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
    },
    buttonStyle: {
        backgroundColor: 'grey',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

EditTask.propTypes = propTypes;

export default EditTask;
