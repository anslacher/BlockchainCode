import { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Details.less'
import { observer, inject } from 'mobx-react'
import Echar from '../../component/Eachar'
import getDate from '../../component/get7time'
import msg from '../../component/message'


@inject('store') @observer
class Details extends Component {
  constructor() {
    super()
    this.state = {
      name: [],
      url: '',
      lineData: [],
      prices: [],
      marketCaps: [],
      volumes: [],
      timeData: [],
      listData: [],
      success: false,
      props: false,
      Toggle: 0
    }
  }

  componentWillMount() {
  }


  componentDidMount() {


    this.setState({
      name: getCurrentInstance().router.params.ticker
    }, () => {
      console.log(this.state.name);
      Taro.request({
        url: `https://api.coingecko.com/api/v3/coins/${this.state.name}?localization=true&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        success: (res) => {
          this.setState({
            listData: res.data,
            success: true
          })
        }
      })

      Taro.request({
        url: `https://api.coingecko.com/api/v3/coins/${this.state.name}/market_chart?vs_currency=usd&days=1`,
        success: (res) => {
          this.setState({
            prices: res.data.prices,
            marketCaps: res.data.market_caps,
            volumes: res.data.total_volumes,

          }, () => {
            this.resPrices(this.state.prices, this.state.marketCaps, this.state.volumes)
            this.setState({
              props: true
            })
          })
        },
        fail: (res) => {
          msg('网络超时请重试,', 'error')
        }
      })
    })

  }
  addBTC(val) {
    this.setState({
      Toggle: 2
    }, () => {
      setTimeout(() => {
        this.setState({
          Toggle: 0
        })
      }, 500)
    })

    Taro.getStorage({
      key: 'user_str',
      success: function (res) {
        console.log(val);
        let arr = []

        // console.log(typeof res.data);
        if (res.data.indexOf(val) >= 0) {
          return msg('已经添加过了', 'warning')
        }
        arr = val + ','
        arr += res.data
        Taro.setStorage({
          key: "user_str",
          data: arr
        })
        msg('添加成功', 'success')
      },
      fail: function (res) {
        msg('添加成功', 'success')
        Taro.setStorage({
          key: "user_str",
          data: val
        })
      }

    })

  }

  resPrices(val1, val2, val3) {
    let arr = []
    val1.map((v) => {
      arr.push(v[1].toFixed(2))
    })
    // let brr = []
    // val2.map((v) => {
    //   brr.push(v[1].toFixed(2))
    // })
    // let crr = []
    // val3.map((v) => {
    //   crr.push(v[1].toFixed(2))
    // })

    let time = []
    val1.map((v) => {
      let str = String(v[0])
      let num = str.substring(0, 10)
      time.push(getDate(num))
    })
    this.setState({
      timeData: time
    })


    this.setState({
      lineData: [
        {
          name: '价格$',
          type: 'line',
          stack: '总量',
          data: arr
        },
        // {
        //   name: '市值',
        //   type: 'line',
        //   stack: '总量',
        //   data: brr
        // },
        // {
        //   name: '总成交量',
        //   type: 'line',
        //   stack: '总量',
        //   data: crr
        // },
      ]
    }, () => {
      // console.log(this.state.lineData)
    })

  }



  render() {
    return (
      <View className='echartDeta'>
        <View>
          {
            this.state.success ? <View className='imageV'><Image src={this.state.listData.image.large}></Image> <Text>{this.state.listData.name}</Text>/<Text>{this.state.listData.symbol}</Text> <View><Text style={{ color: [this.state.Toggle == 2 ? '#10aec2' : ''] }} className="iconfont icon-jia ico" onClick={this.addBTC.bind(this, this.state.listData.id)} ></Text></View></View> : ''}

          <View className='backG'>
            {this.state.success ? <View className='marketCap'>
              <Text>
                ${this.state.listData.market_data.current_price.usd}</Text> <Text>￥{this.state.listData.market_data.current_price.cny}
              </Text>
              <Text>24H涨幅：{this.state.listData.market_data.market_cap_change_percentage_24h}%</Text>
            </View> : ''}



            <View className='marketData'>
              <Text>市值:{this.state.success ? this.state.listData.market_data.market_cap.usd : ''}</Text>
              <Text>24H)最高价$：{this.state.success ? this.state.listData.market_data.high_24h.usd : ''}</Text>
              <Text>24H)最低价$：{this.state.success ? this.state.listData.market_data.low_24h.usd : ''}</Text>
            </View>
          </View>
        </View>
        {/* {console.log(this.state.lineData)} */}

        {this.state.props ? <Echar lineData={this.state.lineData} timeData={this.state.timeData}></Echar> : ''}
        <View className='changePage'>
          <View className='homepage'><Text>相关网站:</Text></View>

          {this.state.success ?
            <View className='word'>
              <Text>{this.state.listData.links.homepage[0]}</Text>
              <Text>{this.state.listData.links.blockchain_site[1]}</Text>
              <Text>{this.state.listData.links.blockchain_site[2]}</Text>

            </View>

            : ''}
        </View>
      </View>
    )
  }
}

export default Details

