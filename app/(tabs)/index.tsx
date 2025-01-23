import { Image, StyleSheet, Text, Platform, Pressable, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pressable><Text>Enabled Button</Text></Pressable>
      <Pressable disabled={true}><Text>Disabled Button</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
