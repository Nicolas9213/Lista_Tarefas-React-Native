import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard, Alert} from "react-native";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function AddList({navigation}) {
  const [list, setlist] = useState(new Array());
  const [newlist, setNewlist] = useState('');

  async function addlist() {

    if (newlist === '') {
      return;
    }

    const search = list.filter(list => list === newlist);

    if (search.length != 0) {
      Alert.alert("Tarefa repetida!")
      return;
    }

    setlist([ ...list, newlist]);
    setNewlist('');
    Keyboard.dismiss();
  }

  async function removelist(item) {
    Alert.alert(
      "Deletar item",
      "Tem certeza que deseja remover essa tarefa?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return;
          },
          style: 'cancel'
          },
            {
              text: "OK", onPress: () => setlist(list.filter(lists => lists != item))
            }
      ],
      { cancelable: false }
    )
  } 

  useEffect(() => {
    async function loadData() {
      const list = await AsyncStorage.getItem("list");

      if (list) {
        setlist(JSON.parse(list));
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function saveData() {
      AsyncStorage.setItem("list", JSON.stringify(list))
    }
    saveData();
  }, [list]);

    return (
        <>
          <View style={styles.container}>
            <View style={styles.Body}>
              <FlatList 
              style={styles.FlatList}
              data={list}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <TouchableOpacity onPress={() => navigation.navigate('List Details', { list: item })}>
                    <View>
                      <Text style={styles.Text}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removelist(item)}>
                    <Text>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
              />
            </View>
            <View style={styles.Form}>
              <TextInput 
              style={styles.Input} 
              placeholderTextColor="#999" 
              autoCorrect={true} 
              placeholder="Adicione uma lista"
              maxLength={25}
              onChangeText={text => setNewlist(text)}
              value={newlist}
              />
              <TouchableOpacity style={styles.Button} onPress={() => addlist()}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
  );
}

export default AddList;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop:  20
  },

  Body: {
    flex: 1
  },
  
  Form: {
    padding: 0,
    height: 50,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1, 
    borderColor: "#EEE"
  },

  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee", 
    borderRadius: 4,
    paddingVertical: 5, 
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
  },

  Button: {
    height: 40,
    width: 40,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },

  FlatList: {
    flex: 1,
    marginTop: 5
  }, 

  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center"
  }, 

  Text: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center"
  }
});