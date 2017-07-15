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
    duration: 1200
  },

  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
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