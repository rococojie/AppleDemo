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
      '../../image/homepage9.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2500,
    duration: 1200,
    // nav
    navs: [
      {
        image: '../../image/tea.jpg',
        text: '下午茶'
      }, {
       image: '../../image/gift.jpg',
        text: '礼物集'
      }, {
        image: '../../image/fruit.png',
        text: '瓜果市场'
      }, 
    ],
    // item
    items: [{ 
      image: '../../image/0.jpg',
      desc: "新鲜上市的龙泉驿蜜桃",
      price: 200,
      total_count: 60,
      remain_count: 50,
      percent:80,
      buy_count: 100
    },{ 
      image: '../../image/0.jpg',
      desc: "富士山苹果，一斤起购",
      price: 10,
      total_count: 80,
      remain_count: 10,
      percent:20,
      buy_count: 30
    }]
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
    /*
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })*/
  },
  go: function (event) {
    wx.navigateTo({
      url: '../category/index'
      //url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },
  gos: function (event) {
    // var url='../template/index?type='+ event.currentTarget.dataset.type;
    // console.log("路径："+url);
    wx.navigateTo({
      url: '../template/index?type=' + event.currentTarget.dataset.type
    })
  },
  buyGoods : function(){
    wx.navigateTo({
      url: '../goods/index'
    })
  }
})
