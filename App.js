import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      series: [
        {nome: 'Peaky Blinders'},
        {nome: 'Como vender drogas online'},
        {nome: 'Os Simpsons'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
        data = {this.state.series}
        renderItem={({item}) => 
      <View style={styles.containerSeries}>
        <Text>{item.nome}</Text>
      </View>
      }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSeries: {

  }
});
