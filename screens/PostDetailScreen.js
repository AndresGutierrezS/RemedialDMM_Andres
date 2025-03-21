import React from 'react';
import { View, Text } from 'react-native';

const PostDetailScreen = ({ route }) => {
    const { post } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{post.title}</Text>
            <Text>{post.body}</Text>
        </View>
    );
};

export default PostDetailScreen;
