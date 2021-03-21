import { Component,createContext} from 'react'
import store from './store/counter'
// import counterStore from './store/counter'
import { Provider } from 'mobx-react'
import 'taro-ui/dist/style/index.scss' 

import './app.less'



class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面

  
  render () {
    return (
      <Provider store={store} className='index'>
        {this.props.children}
      </Provider>
    )
  }
}

export default App

// export {
//   Context
// }