import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Search = (props) => {

  return (
    <View style={{
      padding: 16,
      backgroundColor: 'green'
    }}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Search;