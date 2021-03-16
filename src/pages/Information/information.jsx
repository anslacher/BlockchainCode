import { Component, useState } from 'react'
import { View, Button, Text, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane, AtRate } from 'taro-ui'
import Taro from '@tarojs/taro'

import './information.less'


class SwiperApp extends Component {
  render() {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'

        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}


let HeadToggle = () => {


  return (
    <View>
      <View className='information'>
        <View className='swiper'>
          <SwiperApp></SwiperApp>
        </View>
        <View>最新币读</View>
        <View className='newFa'>
          <View className='new'>
            <View>罗杰·弗：比特币受到了区块大小的阻碍</View>
            <View>
              <Text>2019-04-22</Text>
            </View>
          </View>
        </View>
        <View className='newFa'>
          <View className='new'>
            <View>罗杰·弗：比特币受到了区块大小的阻碍</View>
            <View>
              <Text>2019-04-22</Text>
            </View>
          </View>
        </View>
        <View className='newFa'>
          <View className='new'>
            <View>罗杰·弗：比特币受到了区块大小的阻碍</View>
            <View>
              <Text>2019-04-22</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


let QuickNews = () => {
  let [value, SetValue] = useState(4)

  return (
    <View>
      <View className='QuickNews'>
        <View className='NewsHeader'><Text>快讯</Text></View>
        <View className='ListQuick'>

          <View>【总价值超53亿美元的BTC期权将于3月26日到期】Deribit官方发推称，其当前BTC期权未平仓合约价值120亿美元；ETH期权未平仓合约超过27亿美元。与此同时，总价值超53亿美元的比特币期权未平仓合约将于3月26日到期。目前，即将到期的BTC期权最大痛点为4万美元。注：期权中的最大痛点，在这个价位的期权买方最痛苦，也就是亏损最大， 即损失所有权利金，而期权卖方（机构居多）则获利最大，标的结算价会趋向于期权市场价值最低点位</View>
          <View className='footerQuick'>
            <View>
              <Text>重要程度</Text>
              <AtRate
                value={value}
              />
            </View>
            <View>时间:<Text></Text></View>
          </View>

        </View>

      </View>
    </View>
  )
}


@inject('store') @observer
class information extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }





  render() {
    const tabList = [{ title: '快讯' }, { title: '文章' }]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='background-color: #FAFBFC;text-align: center;'><QuickNews /></View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='background-color: #FAFBFC;text-align: center;'><HeadToggle /></View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}

export default information