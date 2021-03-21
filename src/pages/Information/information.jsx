import { Component, useState, useEffect } from 'react'
import { View, Button, Text, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane, AtRate } from 'taro-ui'
import Taro from '@tarojs/taro'

import './information.less'
import msg from '../../component/message'
import getDate from '../../component/date'


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


@inject('store') @observer
class QuickNews extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      flag: 0
    }
  }

  componentDidMount() {

    Taro.request({
      url: 'http://api.coindog.com/live/list?limit=50',
      success: (res) => {

        this.setState({
          data: res.data.list[0].lives
        })

        this.props.store.inFor = this.state.data

      },
      fail: function (err) {
        msg('超时，请重试或稍后再试', 'error')
      }
    })

    // Taro.request({
    //   url
    // })

  }
  // fn(value) {
  //   Taro.navigateTo({
  //     url:`../QuickNews/QuickNews?id=${value}`
  //   })
  // }

  ifcont(value) {
    if (this.state.flag == value) {
      this.setState({
        flag: 0
      })
    } else {
      this.setState({
        flag: value
      })
    }

  }

  render() {
    return (
      <View>
        <View className='QuickNews' >
          {/* <View className='NewsHeader'><Text>每日快讯</Text></View> */}
          <View>
            {
              this.state.data.map((v, i) => <View className='ListQuick' onClick={this.ifcont.bind(this, v.id)}>
                <View className={this.state.flag == v.id ? 'conTextor' : 'conText'}   >{v.content} </View>
                <View className='getdate'><Text>{getDate(v.created_at)}</Text></View>
                <View className='footerQuick'>
                  <View>
                    <Text>重要程度</Text>
                    <AtRate
                      value={v.grade}
                    />

                  </View>

                  {this.state.flag == v.id ? <View></View> : <View className='toDet'>查看详情</View>}
                  {/* <View>创建时间:<Text>{getDate(v.created_at)}</Text></View> */}
                </View>
              </View>
              )
            }
          </View>

        </View>
      </View>
    )
  }
}






@inject('store') @observer
class information extends Component {
  constructor() {
    super()
    this.state = {
      current: 0,
      listData: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }
  fn() {
    console.log(this.props.store.inFor);
  }

  componentWillMount() {

  }

  render() {
    const tabList = []
    return (
      <View className='InFor'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='text-align: center;'>
              <QuickNews></QuickNews>
            </View>
          </AtTabsPane>
          {/* <AtTabsPane current={this.state.current} index={1}>
          <View style='background-color: #FAFBFC;text-align: center;'><HeadToggle /></View>
        </AtTabsPane> */}
        </AtTabs>
      </View>
    )
  }
}

export default information