import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      series: [
        {id: '1', nome: 'Peaky Blinders'},
        {id: '2', nome: 'Como vender drogas online'},
        {id: '3', nome: 'Os Simpsons'},
        {id: '4', nome: 'Dark'},
        {id: '5', nome: 'Outer Banks'},
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
        data = {this.state.series}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
      <View style={styles.containerSeries}>
        <Text style={styles.titleSeries}>{item.nome}</Text>
      </View>
      }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerSeries: {
    backgroundColor: "grey",
    height: 80,
    margin: 30,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  titleSeries: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
