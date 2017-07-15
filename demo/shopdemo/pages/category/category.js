Page({
  data: {
    windowHeight: 100,
    array: [{
      message: '精品推荐',
    }, {
      message: '下午茶',
    }, {
      message: '礼物精选',
    }, {
      message: '精品瓜果',
    }, {
      message: '零食小吃',
    }, 
    ],
    childCategory:[{
        title:'推荐分类',
        array:[{
          name:'父亲节团购日'
        },{
          name:'夏季消暑团购季'
        },{
          name:'开店同庆满减精选'
        },{
          name: '七夕礼物精选'
        }
        ]
    },{
        title:'热门分类',
        array:[{
          name:'本地水果'
        },{
          name:'进口水果'
        },{
          name:'特色小零食'
        }]
    }]
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    var me = this;
    

    //获取设备窗口信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)

        me.setData({
          windowHeight: res.windowHeight
        })

      }
    })
  },
   //切换分类方法
    toggleCategory: function(event) {
     if(event.target.id=='category1'){
       this.setData({
        childCategory: [{
          title:'热卖品牌',
          array:[{
            name:''
          },{
            name:''
          },{
            name:''
          },{
            name:''
          },{
            name:''
          }]
        },{
          title:'热卖商品',
          array:[{
            name:''
          },{
            name:''
          },{
            name:''
          },{
            name:''
          }]
        }]
      })
     }else{
        this.setData({
           childCategory:[{
            title:'推荐分类',
            array:[{
              name:''
            },{
              name:''
            },{
              name:''
            }]
        },{
            title:'热门分类',
            array:[{
              name:''
            },{
              name:''
            },{
              name:''
            },{
              name:''
            },{
              name:''
            },{
              name:''
            }]
      }]
        })
     }
    }
})