import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PostDetailScreen from './screens/PostDetailScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Publicaciones' }} />
                <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: 'Detalles' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
