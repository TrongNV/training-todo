import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import { loadData } from '../actions';
import { Button, ListItem } from './common';

class TodoList extends Component {
    componentWillMount() {
        this.props.loadData();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ data }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data);
    }

    renderSeparator = (sectionID, rowID) => {
        return <View style={styles.separatorStyle} key={rowID} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={(item) => <ListItem item={item} />}
                    renderSeparator={this.renderSeparator}
                />
                <Button
                    onPress={() => Actions.addTask()}
                    icon={<Icon name="ios-add-outline" size={50} color="#fff" />}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return { data: state.TodoListReducer };
};
const styles = {
    container: {
        flex: 1
    },
    separatorStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0, 0, 0, 0.5)'
    }
};

export default connect(mapStateToProps, { loadData })(TodoList);
