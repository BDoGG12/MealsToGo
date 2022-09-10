import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Search from './src/components/Search.js';
import List from './src/components/List.js';

export default function App() {
  return (
    <>
      <SafeAreaView
        style={
          {
            flex: 1,
          }
        }
      >
        <Search text='search' />
        <List text='list' />
      </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
