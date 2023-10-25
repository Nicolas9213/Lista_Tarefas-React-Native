import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native-web";

export default HomeScreen() {

    return (
        <View style={StyleSheet.home}>
            <Text>Home Screen</Text>
            <Button>Add List</Button>
        </View>
    )
}