import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"

export default function ProfilePage(){
    const [user,setUser] = useState(null);
    const navigation = useNavigation();

    useEffect(() =>{
        const getLoggedInUsername =async() =>{
            try{
                const loggedInUsername = await AsyncStorage.getItem('username');
                const student = students.find(student => student.username === loggedInUsername);

                if(student) {
                    setUser(student);
                } else {
                    navigation. navigate('Login');
                }
            } catch(error){
                console.error('Error fetching username from AsyncStorage',error)
            }
        }
        getLoggedInUsername();
    }, [navigation]);

    if(!user){
        return <Text> Loading... </Text>
    }
    return(
        <>
        
        </>
    )
}