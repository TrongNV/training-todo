import React, { PropTypes } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const propTypes = {
    item: PropTypes.object.isRequired
};

const ListItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => Actions.editTask({ item })}
        >
            <Icon
                name={item.resolved ? 'ios-checkbox-outline' : 'ios-square-outline'}
                size={30}
                style={styles.iconStyle}
                color={item.resolved ? '#4caf50' : '#e91e63'}
            />
            <Text style={styles.taskStyle}>{item.content}</Text>
        </TouchableOpacity>
    );
};
ListItem.propTypes = propTypes;
const styles = {
    itemContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconStyle: {
        paddingLeft: 15,
        paddingRight: 15
    },
    taskStyle: {
        fontSize: 18,
    }
};
export { ListItem };
