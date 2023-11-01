import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

export function AddList({navigation}) {
    return (
        <View style={styles.container}>
             <Button
                title="AddList"
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <TextInput
        style={styles.inputField}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity 
        style={styles.button
        }>
        <View style={styles.iconButton}>
          <Text style={styles.textButton}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AddList;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  inputField: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    marginRight: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    fontSize: 16,
  },
  button: {
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: 18,
    height: 18,
    borderColor: '#F2F2F2',
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  textButton: {
    lineHeight: 16,
    color: '#F2F2F2',
  }
})