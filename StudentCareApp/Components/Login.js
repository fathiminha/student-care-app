import * as React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Login(){
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [error,setError] = React.useState('');
    const navigation = useNavigation();

    const handleLogin = async() => {
        if(!username || !password) {
            setError('Username or password cannot be empty');
            return;
        }
        const student = students.find(student.username === username && student.password === password);
        if (student){
            await AsyncStorage.setItem('username', username);
            navigation.navigate('Profile');
        } else{
            setError('Username or password incorrect');
        }
    };

    




    return(
        <>
        </>
    )
}