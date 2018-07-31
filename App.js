import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'

import List from './components/List'
import Title from './components/Title'

export default class App extends Component {

  state = {
    todos: ['Happy', 'Sad', 'Meh', 'Annoyed'],
    totalMoods: [0,0,0,0]
  }

  updateMoods = (text) => {
    const { todos } = this.state
    const { totalMoods } = this.state
    const index = todos.indexOf(text)
    totalMoods[index]++
    this.setState({
      todos: todos,
      totalMoods: totalMoods
    })
  }

  render() {
    const { todos } = this.state
    const {totalMoods} = this.state

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <List
          list={todos}
          onPressItem={this.updateMoods}
          key={todos.indexOf()}
        />
        <Text>{totalMoods[0]}</Text>
        <Text>{totalMoods[1]}</Text>
        <Text>{totalMoods[2]}</Text>
        <Text>{totalMoods[3]}</Text>
      </View>
    )
  }
}
