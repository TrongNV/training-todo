import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

const RouterWithRedux = connect()(Router);
class RouterComponent extends Component {
    render() {
        return (
            <RouterWithRedux>
                <Scene
                    key="todoList"
                    component={TodoList}
                    title="TodoList title"
                    navigationBarStyle={styles.navigationBarStyle}
                    sceneStyle={styles.sceneStyle}
                />
                <Scene
                    key="addTask"
                    component={AddTask}
                    title="AddTask"
                    navigationBarStyle={styles.navigationBarStyle}
                    sceneStyle={styles.sceneStyle}
                />
            </RouterWithRedux>
        );
    }
}

const styles = {
    navigationBarStyle: {
        backgroundColor: 'green',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    sceneStyle: {
        paddingTop: 65,
    }
};

export default RouterComponent;
