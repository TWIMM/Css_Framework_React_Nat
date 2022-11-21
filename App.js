import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import styles from './style'; 


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.header_horizontal}>
          <Text>Open</Text>
          <Text>Open </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
