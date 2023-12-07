import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal" style={styles.textInput} />
        <Button title="Add Goal"></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
 },
 inputContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24,
  borderBottomWidth: 1,
  borderBottomColor: '#cccccc',
 },
 textInput: {
  borderWidth: 1,
  borderColor: '#CCCCCC',
  width: '70%',
  marginRight: 8,
  padding: 8
 },
 goalsContainer: {
  flex: 4,
 },
});