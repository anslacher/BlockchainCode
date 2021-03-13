export default {
  pages: [
    'pages/index/index',
    'pages/Information/information',
    'pages/rank/rank'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black' 
  },
  tabBar:{
    list:[
      {
        pagePath:"pages/index/index",
        text:"关注",
        iconPath:"./image/icon_myckgm7ygpc/home.png",
        selectedIconPath:"./image/icon_nry0ixrrte/home.png",
      },{
        pagePath:"pages/rank/rank",
        text:"排行",
        iconPath:"./image/icon_myckgm7ygpc/paihangbang.png",
        selectedIconPath:"./image/icon_nry0ixrrte/paihangbang.png",
      },
      {
        pagePath:"pages/Information/information",
        text:"资讯",
        iconPath:"./image/icon_myckgm7ygpc/ai-new.png",
        selectedIconPath:"./image/icon_nry0ixrrte/ai-new.png",
      }
    ]
  }
}
