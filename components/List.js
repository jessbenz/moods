import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, CheckBox } from 'react-native'

export default class List extends Component {
  
  state = {
    check:true
  }

  checkBoxTest()
  {
    this.setState({
      check:!this.state.check
    })
    // We set it to ! because it gets the value right before it's changed.
    // So it was returning the opposite of what it was.
    alert("value is now " + !this.state.check)

    //if this.state.check == !true (Meaning actually if it's true, i.e. checked. See comment above.
    //then return the id or name or something
  } 

  renderItem = (text, key) => {
    //const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        //onPress={() => onPressItem(text)}
        onPress={()=>this.checkBoxTest()}
      >
        <CheckBox key={key} value={this.state.check} onChange={()=>this.checkBoxTest()} />
        <Text>{text}</Text>
        <Text>{key}</Text>
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
