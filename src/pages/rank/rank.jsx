import { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'
import { AtMessage, AtButton } from 'taro-ui'
import aaa from '../../component/message'


import './rank.less'



@inject('store') @observer
class Cont extends Component {
  constructor() {
    super()

  }

  componentWillMount() {
    

  }

  fnTest(value) {
    let pattern = /^(\-)\d+(\.\d{1,3})?$/,
      str = value;
    return pattern.test(str)

  }
  fnBillion = (val) => {
    let vLength = val.toString().length

    let str = val.toString();
    let arr = str.split("")

    // console.log(arr);
    arr.splice(vLength - 8,vLength )
    // let end=arr.map(Number)
    let end = ''
    for (let i = 0; i < arr.length; i++) {
      end+=arr[i]
    }

    return end+'亿';

  }


  linkTo() {
    Taro.navigateTo({
      url: '../Details/Details'
    })
  }
  render() {
    // this.props.store.get.forEach(element => {
    //   console.log(element);
    // });
    return (
      <View>
        {this.props.store.get.map((v, i) =>
          <View className='contTop' onClick={this.linkTo.bind(this)}>
            <View className='top'>{v.rank}</View>
            <View className='btcImg'>
              <Image src={v.logo}></Image>
              <View className='btcName'>{v.name}/{v.fullname}</View>
            </View>
            <View className='uOrd'>
              <Text className={this.fnTest(v.change_percent) ? '.down' : '.up'}>{v.change_percent}</Text>
            </View>
            <View>
              <Text>{this.fnBillion(v.market_value_usd)}</Text>
            </View>

          </View>
        )}

      </View>


    );


  }
}




@inject('store') @observer
class Index extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }

  }

  handleClick(err, type) {
    Taro.atMessage({
      'message': err,
      'type': type,
    })
  }

  componentWillMount() {

    // 
    // console.log(Message);

    Taro.request({
      url: 'https://dncapi.bqiapp.com/api/coin/web-coinrank?page=1&type=-1&pagesize=100&webp=1',
      success: (res) => {
        this.props.store.getRank(res.data.data)
        // this.setState({
        //   data:this.props.store.get
        // })
        // console.log(this.state.data);
      },
      fail: function (err) {
        aaa('网络超时请重试,', 'error')
      }
    })




  }



  render() {

    return (
      <View >
        <AtMessage />
        <View className='rankIndex' >
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