import { Component, useContext, useState } from 'react'
import { View, Button, Text, Image, } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import Taro from '@tarojs/taro'
import InPage from '../../component/concerns'
import { observer, inject } from 'mobx-react'
import '../../utils/font_unidomsbzte/iconfont.css'

// import { Observer } from 'mobx-react'
// import * as echarts from '../../ec-canvas/echarts';
import './index.less'

@inject('store') @observer
class Header extends Component {
  constructor() {
    super()
    this.state = {
      Toggle: 0
    }

  }


  cSwitch(value) {

    this.props.store.handleClick(value)
    // if (this.props.store.current == value) {
    //   console.log(this)
    // }
    // console.log(this.props.store.current)
  }

  show(value) {
    this.setState({
      Toggle: value
    }, () => {
      setTimeout(() => {
        this.setState({
          Toggle: 0
        })
      }, 200)
    })
    if (value === 1) {
      Taro.navigateTo({
        url: '../settingIndex/settingIndex',
        // events:{

        // }
      })
    } else {
      Taro.navigateTo({
        url: '../search/search',
        // events:{

        // }
      })
    }

  }


  render() {
    return (
      <View className='header'>
        <View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-1 at-col--auto'>
            <View className='portrait'>头像</View>
          </View>
          <View className='at-col table' >
            <View className={this.props.store.current == 0 ? 'active choice' : 'choice'} onClick={this.cSwitch.bind(this, 0)}>我关注的</View>
            <View className={this.props.store.current == 1 ? 'active choice' : 'choice'} onClick={this.cSwitch.bind(this, 1)}>模拟资产</View>
            {/* <View className={this.props.store.current == 2 ? 'active choice' : 'choice'} onClick={this.cSwitch.bind(this, 2)}>换算</View> */}
            <View className='icoFa'>
              <Text className="iconfont icon-shezhi ico" onClick={this.show.bind(this, 1)} style={{ color: [this.state.Toggle == 1 ? '#10aec2' : ''] }}></Text>
            </View>
            <View className='icoFa'>
              <Text className="iconfont icon-jia ico" onClick={this.show.bind(this, 2)} style={{ color: [this.state.Toggle == 2 ? '#10aec2' : ''] }}></Text>
            </View>
          </View>
        </View>

      </View>
    )
  }
}


@inject('store') @observer
class Index extends Component {

  // componentWillMount() { }

  // componentDidMount() { }

  // componentWillUnmount() { }

  // componentDidShow() { }

  // componentDidHide() { }


  render() {
    // const { counterStore: { counter } } = this.props.store
    return (
      <View>
        <Header></Header>
        <View className='index'>
          <InPage></InPage>
        </View>
      </View>
    )
  }
}

export default Index
