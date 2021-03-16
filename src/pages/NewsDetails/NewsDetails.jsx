import { Component, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Radio, Label } from '@tarojs/components'
import { AtCheckbox, AtIcon } from 'taro-ui'
import './NewsDetails.less'
import { EChart } from "echarts-taro3-react";





const Header = () => {

  return (
    <View>
      <View className='title'>金色内参 | 十亿美元俱乐部新贵 能否逃过“主网上线”魔咒</View>
      <View>Tezos在过去一周得到市场追捧，价格飙升39.94%，达到1.68美元，市值10.05亿美元，跻身十亿美元俱乐部，但是距历史高位依然损失了77.6%，最低点是7月的1.08美元，价格整体处在低位</View>
      <View>
        
        <View>作者：<Text>合约星期五</Text></View>
      </View>
    </View>
  )
}





class News extends Component {
  constructor() {
    super()
  }





  render() {
    return (
      <View>
        <View>

        </View>
      </View>
    )
  }
}

export default News