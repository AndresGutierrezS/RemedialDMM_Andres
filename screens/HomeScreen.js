import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { clearSession } from '../authService';

const HomeScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Publicaciones</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { post: item })}>
                        <View style={{ padding: 10, borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity onPress={() => { clearSession(); navigation.replace('Login'); }} style={{ marginTop: 20 }}>
                <Text style={{ color: 'red', textAlign: 'center' }}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
