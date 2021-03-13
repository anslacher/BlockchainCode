import { Component, useContext, useState } from 'react'
import { observer, inject } from 'mobx-react'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'







@inject('store') @observer
class Asset extends Component {
  constructor() {
    super()
  }





  render() {

    return (
      <View className='Asset'>
        <View className='SimulationFA'>
          <View className='Simulation' id='main'>
            <Text>总资产估值:</Text>
            <Text>$77777777 </Text>
            <Text> <Text>折合~=</Text>￥77777777</Text>
          </View>
        </View>
        <View className='AssetList'>
          <View className='LisFa'>
            <View className="List">
              <View><Text>币种</Text></View>
              <View><Text>数量</Text></View>
              <View><Text>当前价格</Text></View>
            </View>
            <View className="List Virtual">
              <View><Text>BTC</Text></View>
              <View><Text>1</Text></View>
              <View><Text className='up'>11111</Text></View>
            </View>
          </View>
          <View className='LisFa'>
            <View className="List">
              <View><Text>币种</Text></View>
              <View><Text>数量</Text></View>
              <View><Text>当前价格</Text></View>
            </View>
            <View className="List Virtual">
              <View><Text>BTC</Text></View>
              <View><Text>1</Text></View>
              <View><Text className='up'>11111</Text></View>
            </View>
          </View>
        </View>

      </View>
    )
  }


}
export default Asset