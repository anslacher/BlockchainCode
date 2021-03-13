import { Component, useContext, useState } from 'react'
import { observer, inject } from 'mobx-react'
import { View, Button, Text } from '@tarojs/components'
import Asset from './Asset'

@inject('store')  @observer
class MyAttention extends Component {
  render() {
    return (
      <View className='list'>
        <View className='headList'>
          <View>
            <View></View>
            <View>币种类</View>
          </View>
          <View>最新价格</View>
          <View>涨幅(24H)</View>
        </View>
        <View className='childList' >
          <View>
            <View className='inline'>BTC\</View><View className='eee'>比特币</View>
            <View className='rank'>市值排名:<View className='inline'>1</View></View>
          </View>
          <View><View>$41778.35</View> <View></View></View>
          <View>涨幅(24H)</View>
        </View>
        <View className='childList' >
          <View>
            <View className='inline'>BTC\</View><View className='eee'>比特币</View>
            <View className='rank'>市值排名:<View className='inline'>1</View></View>
          </View>
          <View>最新价格</View>
          <View>涨幅(24H)</View>
        </View>
      </View>
    )

  }

}




@inject('store') @observer
class InPage extends Component {
  render() {
    return (
      <View >
        {this.props.store.current == 0 ? < View className='content' > <MyAttention></MyAttention> </View > : null}
        {this.props.store.current == 1 ? < View className='content' > <Asset></Asset> </View> : null}
        {/* {this.props.store.current == 2 ? < View className='content' > 内容3 </View> : null} */}

      </View>
    )
  }


}


export default InPage
