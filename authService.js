import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSession = async (email) => {
    try {
        await AsyncStorage.setItem('userEmail', email);
    } catch (error) {
        console.error("Error saving session", error);
    }
};

export const getSession = async () => {
    try {
        return await AsyncStorage.getItem('userEmail');
    } catch (error) {
        console.error("Error getting session", error);
        return null;
    }
};

export const clearSession = async () => {
    try {
        await AsyncStorage.removeItem('userEmail');
    } catch (error) {
        console.error("Error clearing session", error);
    }
};
