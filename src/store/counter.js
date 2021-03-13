import {observable,computed,action} from 'mobx'



class AppStore {
  // constructor() {
  //   makeAutoObservable(this)
  // }

  @observable get =[{
    
  }]
  @observable current = 0;
  @action handleClick(value) {
    this.current = value
  }
  // observable({
  // });



}
let store = new AppStore();
export default store
