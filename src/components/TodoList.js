import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import { loadData } from '../actions';
import { Button } from './common';

class TodoList extends Component {
    componentWillMount() {
        this.props.loadData();
        this.createDataSource({ undefined });
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ data }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data || []);
    }

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1 }}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={(item) => <Text>{item.content}</Text>}
                />
                <Button title="Add" onPress={() => console.log('onButtonPressed')} />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { data } = state.TodoListReducer;
    return { data };
};
export default connect(mapStateToProps, { loadData })(TodoList);
