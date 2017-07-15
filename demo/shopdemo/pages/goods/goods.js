// goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    goods:{
      desc:"富士山精致无敌大仙桃，吃了代码写的好",
      price: 200,
      buy_count: 1
    },
    adress_list: [
      { address_id: 0, value: '华为一号门' },
      { address_id: 1, value: '华为二号门', checked: 'true' },
      { address_id: 2, value: '华为三号门' }
    ]
  },

  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  decBuyCount: function (e) {
    if (this.data.goods.buy_count - 1 >= 0)
    {
      this.setData({
        "goods.buy_count": this.data.goods.buy_count - 1
      })
    }
  },

  incBuyCount: function (e) {
    this.setData({
      "goods.buy_count": this.data.goods.buy_count + 1
    })
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})