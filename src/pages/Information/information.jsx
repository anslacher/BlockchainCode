import { Component } from 'react'
import { View, Button, Text, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

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


@inject('store') @observer
class information extends Component {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

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
}

export default information