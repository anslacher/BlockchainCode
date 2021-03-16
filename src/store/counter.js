import {observable,computed,action} from 'mobx'



class AppStore {
  // constructor() {
  //   makeAutoObservable(this)
  // }

  @observable get = []
  @observable current = 0;
  @action getRank(value){
    value.map((v,i)=>{
      this.get.push(v)
    })
  }
  @action handleClick(value) {
    this.current = value
  }
  // observable({
  // });



}
let store = new AppStore();
export default store
