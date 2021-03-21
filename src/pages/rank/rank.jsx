import { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'
import msg from '../../component/message'
import './rank.less'



@inject('store') @observer
class Cont extends Component {
  constructor() {
    super()

  }

  fnSub(value) {
    let str = String(value)
    let num = str.substring(0, 4)
    return num;
  }


  fnTest(value) {
    let pattern = /^(\-)\d+(\.\d{1,7})?$/;
    let num = value
    return pattern.test(num)

  }
  fnBillion = (val) => {
    let vLength = val.toString().length

    let str = val.toString();
    let arr = str.split("")

    // console.log(arr);
    arr.splice(vLength - 8, vLength)
    // let end=arr.map(Number)
    let end = ''
    for (let i = 0; i < arr.length; i++) {
      end += arr[i]
    }

    return end + '亿';

  }


  linkTo(val) {

    Taro.navigateTo({
      url: `../Details/Details?ticker=${val}`
    })
  }
  render() {
    // this.props.store.get.forEach(element => {
    //   console.log(element);
    // });
    return (
      <View className='rank1'>
        {this.props.store.get.map((v, i) =>

          <View className='contTop' onClick={this.linkTo.bind(this, v.id)}>
            <View className='top'><Text>{v.market_cap_rank}</Text></View>
            <View className='btcImg'>
              <Image src={v.image}></Image>
              <View className='btcName'>{v.name}/{v.symbol}</View>
            </View>
            <View className='uOrd'>
              {/* {console.log(v.market_cap_change_percentage_24h)} */}
              <Text className={this.fnTest(v.market_cap_change_percentage_24h) ? '.down' : '.up'}>{this.fnSub(v.market_cap_change_percentage_24h)}</Text>
            </View>
            <View>
              <Text className='down'>{this.fnBillion(v.market_cap)}</Text>
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

  componentDidMount() {
    // 
    // console.log(Message);
    Taro.request({
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      success: (res) => {

        this.props.store.getRank(res.data)


        // this.setState({
        //   data:this.props.store.get
        // })
        // console.log(this.state.data);
      },
      fail: function (err) {
        msg('网络超时请重试,', 'error')
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
            <View className='changePercent'>24H涨幅%</View>
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