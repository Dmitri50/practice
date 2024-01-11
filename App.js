import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-gray-400 text-md font-bold mt-2">
        Open up App.js to start working on your app!
    </Text>
    <StatusBar style="auto" />
  </View>
);
}
