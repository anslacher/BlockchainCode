import {
  observable,
  computed,
  action
} from 'mobx'



class AppStore {
  // constructor() {
  //   makeAutoObservable(this)
  // }
  @observable inFor = []
  @observable get = []
  @observable current = 0;
  @observable login_Str=[]
  @observable flag=false;
  @observable new_str=[]
  // @action addStr(val){
  //   this.login_Str.push(val)
  // }
  
  @action getRank(value) {
    value.map((v, i) => {
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
