import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './Components/Login';
import { Provider as PaperProvider } from 'react-native-paper';
import ProfilePage from './Components/ProfilePage';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ProfilePage />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
