import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>Bem vindo a Your Lists!</Text>
        <Text style={styles.subtitle}>O seu app de listas</Text>
      </View>
      <Button
        title="Adicionar Listas"
        onPress={() => navigation.navigate('AddList')}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  texts: {
    alignItems: 'center'
  }
})