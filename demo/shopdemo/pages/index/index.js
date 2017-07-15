//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //位置
    // 轮播
    images: [
     //'../../image/homepage3.jpg',
      '../../image/homepage4.jpg',
      '../../image/homepage5.jpg',
      '../../image/homepage6.jpg',
      //'../../image/homepage7.jpg',
      '../../image/homepage8.jpg',
      '../../image/homepage9.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2500,
    duration: 1200,
    // nav
    navs: [
      {
        //image: '../../image/favorable.jpg',
        image: '../../image/tea.jpg',
        text: '下午茶'
      }, {
       // image: '../../image/new.jpg',
       image: '../../image/gift.jpg',
        text: '礼物集'
      }, {
       // image: '../../image/choose.jpg',
       // image: '../../image/fruit2.jpg',
        image: '../../image/fruit.png',
        text: '瓜果市场'
      }, 
    ],
    // item
    items: [
      /*
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/84439174cad04497beda3a076663beb4.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/1987d8eb8b1748368b7f2382332c9718.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' },
      { image: //'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' } */
    ]
   
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  go: function (event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },
  gos: function (event) {
    // var url='../template/index?type='+ event.currentTarget.dataset.type;
    // console.log("路径："+url);
    wx.navigateTo({
      url: '../template/index?type=' + event.currentTarget.dataset.type
      
    })
  }
})
