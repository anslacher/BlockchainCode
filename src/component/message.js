
import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'

  function handleClick(err, type) {
    Taro.atMessage({
      'message': err,
      'type': type,
    })
  }
  


export default handleClick
