import { Component } from 'react'
import Taro, { loadFontFace } from '@tarojs/taro'
import { View, Text, Radio, Label, RadioGroup } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtCheckbox, AtIcon } from 'taro-ui'
import '../../utils/font_unidomsbzte/iconfont.css'
import './settingIndex.less'


@inject('store') @observer
class List extends Component {
  constructor() {
    super()
    this.state = {
      flag: false,
      value: [],
      checkedList: []
    }

    this.checkboxOption = []
  }
  checkboxOption = []

  componentDidMount() {
    // this.handleChange=(value)=>{
    //   this.props.checkedList
    // }
    // console.log(this.props.flag);
    this.handleChange()
    this.fnrep()
    // console.log(typeof this.props.store.login_Str);
    // this.setState({
    //   checkboxOption = [{
    //     value: 'all',
    //     label: '选中全部',
    //   }]
    //   checkedList: this.props.store.login_Str
    // }, () => {
    //   console.log(this.state.checkedList);
    // })


  }

  fnrep() {

    let arr = this.props.store.login_Str
    let obj = []
    let obj1 = []
    arr.forEach(element => {
      obj.push({
        value: element,
        label: element,
        // disabled: false
      })
      obj1.push(element)
    });
    this.checkboxOption = obj
    this.setState({
      checkedList: obj1
    })
    // console.log(this.state.checkedList);
  }



  handleChange(value) {
    this.setState({
      checkedList: value
    })
    this.props.store.new_str=value
    console.log(value);
  }

  render() {
    return (
      <View>
        <View className='cont'>
          {/* {console.log(this.checkboxOption)} */}
          <AtCheckbox
            options={this.checkboxOption}
            selectedList={this.state.checkedList}
            onChange={this.handleChange.bind(this)}
          />

        </View>
      </View>
    )
  }


}

@inject('store') @observer
class Setting extends Component {
  constructor() {
    super()
    this.state = {
      checkedList: ['list1'],
      flag: false
    }
  }
  checkboxOption = [{
    value: 'all',
    label: '选中全部',
  }]

  componentDidMount() {

  }

  handrem() {
    let arr = this.props.store.new_str
    let obj = []
    Taro.getStorage({
      key: 'user_str',
      success: function (res) {
        arr.forEach(element => {
          obj+=element+','
        });
        Taro.removeStorage({
          key: 'user_str',
          success: function (res) {
            obj.substring(0, obj.length - 1);
            console.log(obj);
            Taro.setStorage({
              key: "user_str",
              data: obj,
              success: (res) => {
              }
            })
          }
        })
      },
      fail: (err) => {

      }
    })

  }

  handleChange(value) {
    console.log(this);
    this.setState({
      checkedList: value
    })
  }

  render() {
    return (
      <View>

        <List flag={this.state.flag}  ></List>
        <View className='footer'>
          <AtCheckbox
            onChange={this.handleChange.bind(this)}
            options={this.checkboxOption}
            selectedList={this.state.checkedList}
          ></AtCheckbox>
          <AtIcon className='at-icon at-icon-trash' onClick={this.handrem.bind(this)}></AtIcon>
        </View>
      </View>
    )
  }
}
export default Setting