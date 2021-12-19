import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { View, Text, FlatList, TouchableOpacity, Image, Keyboard, StyleSheet } from 'react-native';

import actions from '../../store/action/';
import { getFontSize, dynamicSize } from '../../utils/responsive';
import TextInpt from '../../component/TxtInput';


const Home = (props) => {

    const [serachText, setSearchText] = useState('');
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        props.taskAction.getList();
    }, [])

    const deleteItem = (item) => {
        props.taskAction.delete(item);
    }

    const serachItem = () => {
        Keyboard.dismiss();
        const text = serachText.toString();
        if (text != '') {
            const originalItem = [...props.todoTaskList.task];
            const result = originalItem.filter((obj) => JSON.stringify(obj).toLowerCase().includes(text.toLowerCase()));
            setTimeout(() => {
                setItemList(result);
            }, 400)
        }
    }

    const showAllItem = () => {
        setItemList([]);
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.rowCard} key={index}>
                <TouchableOpacity
                    style={styles.rowBtn}
                    onPress={() => { props.navigation.navigate('AddTask', { fromWhere: 'editItem', data: item }) }}
                >
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.rowDel}
                    onPress={() => deleteItem(item)}
                >
                    <Image
                        source={require('../../assets/delete.png')}
                        style={{ width: dynamicSize(15), height: dynamicSize(15) }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={styles.container}
            onMoveShouldSetResponder={() => Keyboard.dismiss()}
        >
            <View style={styles.headerContainer}>
                <TextInpt
                    image={require('../../assets/search.png')}
                    searchButtonClick={serachItem}
                    containerStyle={{ height: dynamicSize(45) }}
                    placeholder={'Search'}
                    returnKeyType={'done'}
                    value={serachText}
                    inputSomething={(text) => setSearchText(text)}
                    onSubmitEditing={serachItem}
                    onBlur={showAllItem}
                />
            </View>
            <View style={styles.content}>
                <FlatList
                    data={itemList.length > 0 ? itemList : props.todoTaskList.task}
                    initialNumToRender={20}
                    extraData={props.todoTaskList}
                    keyExtractor={(item, index) => (item.id + 1).toString()}
                    renderItem={renderItem}
                />
            </View>
            <TouchableOpacity
                style={styles.floatButton}
                onPress={() => { props.navigation.navigate('AddTask', { fromWhere: 'addButton', data: null }) }}
            >
                <Text style={styles.floatBtnTxt}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerContainer: {
        height: dynamicSize(45),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: dynamicSize(10)
    },
    content: { marginTop: dynamicSize(10), paddingBottom: 50, },
    floatButton: {
        position: 'absolute',
        zIndex: 300000,
        backgroundColor: 'black',
        bottom: dynamicSize(60),
        right: dynamicSize(40),
        width: dynamicSize(40),
        height: dynamicSize(40),
        borderRadius: 100,
        alignItems: 'center'
    },
    floatBtnTxt: {
        fontSize: getFontSize(27),
        fontWeight: '800',
        color: 'red'
    },
    rowCard: {
        flex: 1,
        backgroundColor: 'red',
        marginHorizontal: dynamicSize(10),
        marginVertical: dynamicSize(5),
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: dynamicSize(60),
        borderRadius: dynamicSize(10)
    },
    rowBtn: { flex: 0.8, justifyContent: 'center', paddingLeft: dynamicSize(10) },
    title: { fontSize: getFontSize(18), color: 'white', fontWeight: '600' },
    rowDel: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: dynamicSize(10)
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);