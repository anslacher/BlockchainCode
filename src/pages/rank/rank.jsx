import { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'

import './rank.less'


class Cont extends Component {
  constructor() {
    super()
  }
  linkTo(){
    Taro.navigateTo({
      url:'../Details/Details'
    })
  }
  render() {
    return (
      <View className='contTop' onClick={this.linkTo.bind(this)}>
        <View className='top'>1</View>
          <View className='btcImg'>
            <Image   src='https://s2.feixiaoquan.com/logo/1/bitcoin.png?x-oss-process=style/coin_36_webp'></Image>
            <View className='btcName'>BTC/比特币</View>
          </View>
          <View className='uOrd'>
            <Text>7.97</Text>
          </View>
          <View>
            <Text>59669.2</Text>
          </View>
        
      </View>

    );
  }
}




@inject('store') @observer
class Index extends Component {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View>
        <View className='rankIndex'>
          <View className='header'>
            <View className='top'>排名</View>
            <View className='btcName'>币种</View>
            <View className='changePercent'>24H涨幅</View>
            <View className='marketValue'>$市值</View>
          </View>
          <View className='cont'>
              <Cont></Cont>
          </View>
        </View>
      </View>
    )
  }
}

export default Index