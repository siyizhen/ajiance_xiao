// pages/chajieguo/chajieguo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      jiancedians:['长沙疾控中心','武汉疾控中心'],
      isShow:false,
      jiancedian:'请选择检测点'
  },

  open:function(){
    this.setData({
      isShow:!this.data.isShow
    })
  },

  changejiancedian:function(e){
    this.setData({
      jiancedian:this.data.jiancedians[e.detail.value]
    });
  },
})