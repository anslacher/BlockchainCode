import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtSearchBar } from 'taro-ui'
import './search.less'



class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchV: ''
    }
  }
  onChange(value) {
    console.log(1)
    this.setState({
      searchV: value
    })
  }
  addBtc(value){
    console.log(1)
  }

  render() {
    return (
      <View>
        <View className='SearchIndex'>
          <View className='SearchInput'>
            <View>
              <AtSearchBar
                value={this.state.searchV}
                onChange={this.onChange.bind(this)}
              ></AtSearchBar>
            </View>
          </View>
          <View className='childList' onClick={this.addBtc.bind(this)}>
            <View>
              <View className='inline'>BTC\</View><View className='eee'>比特币</View>
              <View className='rank'>市值排名:<View className='inline'>1</View></View>
            </View>
            <View>最新价格</View>
            <View>涨幅(24H)</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Search