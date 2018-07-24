import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {

  renderItem = (text) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(text)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})
