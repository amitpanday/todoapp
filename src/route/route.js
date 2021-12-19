import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../containers/appscreen/home';
import AddTask from '../containers/appscreen/addtask';


const MainStack = createAppContainer(
    createStackNavigator(
        {
            Home: {
                screen: Home,
                navigationOptions: { headerShown: false }
            },
            AddTask: {
                screen: AddTask,
                navigationOptions: { headerShown: false }
            }
        },
        { initialRouteName: 'Home' },
    )
);

export default MainStack;