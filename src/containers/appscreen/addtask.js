import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { View, StyleSheet } from 'react-native';

import Header from '../../component/header';
import actions from '../../store/action/';
import TextInpt from '../../component/TxtInput';
import { dynamicSize } from '../../utils/responsive';
import Button from '../../component/button';

const AddTask = (props) => {

    const [title, setTitle] = useState('');
    const { fromWhere, data } = props.navigation.state.params;

    useEffect(() => {
        if (fromWhere == 'editItem') {
            const { title } = data;
            setTitle(title.toString());
        }
    }, [0]);

    const submitTask = () => {
        const id = props.todoTaskList.task.length;
        if (title != '') {
            const data = {
                id: id + 1,
                title,
                "completed": false,
                "userId": 1
            };
            props.taskAction.create(data);
            setTitle('');
        }
    }

    const updateTask = () => {
        const { id, userId, completed } = data;
        if (title != '') {
            const body = {
                id,
                title,
                completed,
                userId
            };
            props.taskAction.update(body);
            setTitle('');
        }
    }


    return (
        <View style={styles.container}>
            <Header title={fromWhere == 'editItem' ? 'UpdateTask' : 'AddTask'} navigation={props.navigation} />
            <View style={styles.content}>
                <View style={{ height: dynamicSize(20) }} />
                <TextInpt
                    placeholder={'Please enter title'}
                    value={title}
                    inputSomething={(title) => setTitle(title)}
                />
                <View style={{ height: dynamicSize(20) }} />
                <Button title={fromWhere == 'editItem' ? 'Update' : 'Submit'} onPress={fromWhere == 'editItem' ? updateTask : submitTask} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});


const mapStateToProps = (state) => {
    return {
        todoTaskList: state.CreateTask,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskAction: bindActionCreators(actions.TodoTask, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);