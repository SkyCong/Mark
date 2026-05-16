export default {
    pages: [
      'pages/splash/splash',
      'pages/index/index',
      'pages/index/movie/movie',    // 新增：对应“我的电影”
      'pages/index/setting/setting', // 新增：对应“账号”
      'pages/display/search/search',
      'pages/display/class/class',
      'pages/display/daycard/daycard',
      'pages/display/hotmovie/hotmovie',
      'pages/display/class_display/classDisplay',
      'pages/display/index_detais/indexDetails',
      'pages/display/details/details'
    ],
    window: {
      navigationBarTitleText: '发现',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#496069'
    },
    tabBar: {
      color: '#496069',
      selectedColor: '#000',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '发现',
          iconPath: 'assets/tab_discover_unchecked.png',
          selectedIconPath: 'assets/tab_discover_checked.png'
        },
        {
          pagePath: 'pages/index/movie/movie',
          text: '我的电影',
          iconPath: 'assets/tab_movies_unchecked.png',
          selectedIconPath: 'assets/tab_movies_checked.png'
        },
        {
          pagePath: 'pages/index/setting/setting',
          text: '账号',
          iconPath: 'assets/tab_usercenter_unchecked.png',
          selectedIconPath: 'assets/tab_usercenter_checked.png'
        }
      ]
    }
  }