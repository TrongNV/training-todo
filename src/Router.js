import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

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
                    titleStyle={styles.titleStyle}
                />
                <Scene
                    key="addTask"
                    component={AddTask}
                    title="AddTask"
                    navigationBarStyle={styles.navigationBarStyle}
                    sceneStyle={styles.sceneStyle}
                    titleStyle={styles.titleStyle}
                    leftButtonIconStyle={styles.backIconStyle}
                />
                <Scene
                    key="editTask"
                    component={EditTask}
                    title="EditTask"
                    navigationBarStyle={styles.navigationBarStyle}
                    sceneStyle={styles.sceneStyle}
                    titleStyle={styles.titleStyle}
                    leftButtonIconStyle={styles.backIconStyle}
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
    },
    titleStyle: {
        color: '#fff',
        fontSize: 18
    },
    backIconStyle: {
        tintColor: '#fff'
    },
    rightBtnTextStyle: {
        color: '#fff'
    }
};

export default RouterComponent;
