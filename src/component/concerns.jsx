import { Component, useContext, useState } from 'react'
import { observer, inject } from 'mobx-react'
import { View, Button, Text } from '@tarojs/components'
import Seach from './Seach'
import Taro, { getCurrentInstance } from '@tarojs/taro'
// import '../utils/font_unidomsbzte/iconfont'



@inject('store') @observer
class MyAttention extends Component {
  constructor() {
    super()
    this.state = {
      flag: false,
      user_str: 0
    }
  }



  componentDidMount() {
    // Taro.clearStorage()


  }

  toLink(val) {
    Taro.navigateTo({
      url: `../Details/Details?ticker=${val}`
    })
  }
  change() {
    console.log(this.props.store.handleClick(1));
  }

  render() {
    return (
      <View className='list'>
        <View>
          <View className='headList'>

          </View>
          <View className='block'>
            {/* {console.log(this.props.store.flag,this.props.store.login_Str)} */}
            
            {this.props.store.flag ?

              this.props.store.login_Str.map((v) =>
                // console.log(v);
                <View onClick={this.toLink.bind(this, v)}>
                  <Text>{v}</Text>
                </View>
              ) : ''
            }
          </View>
          <View className='butt'>
            <View onClick={this.change.bind(this)}>
              <View>去添加</View>
            </View>
          </View>
        </View>
      </View>
    )

  }

}




@inject('store') @observer
export default class concerns extends Component {


  render() {
    return (
      <View >
        {this.props.store.current == 0 ? < View className='content' > <MyAttention></MyAttention> </View > : null}
        {this.props.store.current == 1 ? < View className='content' > <Seach /> </View> : null}
        {/* {this.props.store.current == 2 ? < View className='content' > 内容3 </View> : null} */}

      </View>
    )
  }


}
