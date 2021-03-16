import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Radio, Label } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtCheckbox, AtIcon } from 'taro-ui'
import '../../utils/font_unidomsbzte/iconfont.css'
import './settingIndex.less'



class List extends Component {
  constructor() {
    super()
    this.state = {
      flag: false
    }
  }
  checkboxOption = [{}]


  handleChange(value) {
    this.setState({
      checkedList: value
    })
  }
  changeChecked(value) {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <View>
        <View className='cont'>
          <View className='childList'>
            <View>
              <Label>
                <Radio color={"#6190E8"} checked={this.state.flag ? true : false} onClick={this.changeChecked.bind(this)}></Radio>
              </Label>
            </View>
            <View>
              <View className='inline'>BTC\</View><View className='eee'>比特币</View>
              <View className='rank'>市值排名:<View className='inline'>1</View></View>
            </View>
            <View><Text className='iconfont icon-zhiding ico'></Text></View>
            <View><Text className='iconfont icon-paixusort-sheng ico'></Text></View>
          </View>
        </View>
      </View>
    )
  }


}


class Setting extends Component {
  constructor() {
    super()
    this.state = {
      checkedList: ['list1']
    }
  }
  checkboxOption = [{
    value: 'all',
    label: '选中全部',
  }]




  handleChange(value) {
    this.setState({
      checkedList: value
    })
  }

  render() {
    return (
      <View>
        <View className='sett'>
          <View>选择</View>
          <View>币种</View>
          <View>置顶</View>
          <View>拖拽</View>
        </View>
        <List></List>
        <View className='footer'>
          <AtCheckbox
            onChange={this.handleChange.bind(this)}
            options={this.checkboxOption}
            selectedList={this.state.checkedList}
          ></AtCheckbox>
          <AtIcon className='at-icon at-icon-trash'></AtIcon>
        </View>
      </View>
    )
  }
}
export default Setting