import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { students } from '../assets/StudentsDb';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!username.trim() || !password.trim()) {
            setError('Username or password cannot be empty');
            return;
        }
        const student = students.find(
            (student) => student.username === username && student.password === password
        );
        if (student) {
            await AsyncStorage.setItem('username', username);
            navigation.navigate('Profile');
        } else {
            setError('Username or password incorrect');
        }
    };

    return (
        <PaperProvider>
            <View style={styles.mainContainer}>
                <View style={styles.content}>
                    <Text style={styles.heading}>STUDENT LOGIN</Text>
                    <TextInput
                        label="Username"
                        mode="outlined"
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        label="Password"
                        mode="outlined"
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button
                        mode="contained"
                        style={[styles.button, (!username || !password) && { backgroundColor: '#ccc' }]}
                        labelStyle={styles.buttonLabel}
                        onPress={handleLogin}
                        disabled={!username || !password}
                    >
                        Login
                    </Button>

                    {error ? (
                        <View style={styles.errorContainer}>
                            <Image
                                source={require('../assets/error.png')}
                                style={styles.errorImage}
                            />
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ) : null}
                </View>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        marginTop: 20,
    },
    button: {
        width: '80%',
        marginTop: 20,
        backgroundColor: '#510e51',
    },
    buttonLabel: {
        color: 'white',
    },
    errorContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorImage: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    errorText: {
        color: '#510e51',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
