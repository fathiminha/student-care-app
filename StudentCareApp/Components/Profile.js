import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { PaperProvider } from "react-native-paper";

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
        <PaperProvider>
            
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingBottom : 70,
        position: 'relative',
    },
    profileContent:{
        flexGrow: 1,
        padding :20,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        width: 200,
        height: 200,
        marginBottom: 15,
        boaderRadius: 75,
        overflow: 'hidden',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    email:{
        fontSize: 16,
        color: '#555',
        marginBottom:10,
    },
    sectionTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop:20,
    },
    phone:{
        fontSize: 16,
        color: '#555',
        marginBottom:10,
        textAlign:'left',
    },
    address:{
        fontSize: 16,
        color: '#555',
        textAlign: 'left',
    },
    leftAligned: {
        textAlign :'left',
        width: '100%',
        paddingLeft: 10,
    },
    seperator:{
        width: '80%',
        height:1,
        backgroundColor: '#ddd',
        marginVertical: 10,
        alignSelf: 'center',
    },
    footerMenu: {
        position: 'absolute',
        left: 0,
        right: 0,
    }
})