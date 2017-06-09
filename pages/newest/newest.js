// pages/newest/newest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position:'',
  },

  listenerButtonPlay: function () {
    wx.playBackgroundAudio({
      //播放地址  
      dataUrl: 'http://link.hhtjim.com/163/432486477.mp3',
      title: 'liar dance',
      //图片地址  
      coverImgUrl: 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7af40ad162d9f2d36614fc80a1ec8a136327cc5c.jpg'
    })  
  },


  /** 
   * 播放状态 
   */
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)
        console.log('status:' + res.status)
        console.log('downloadPercent:' + res.downloadPercent)
        console.log('dataUrl:' + res.dataUrl)
      }
    })
  },


  /** 
   * 监听button暂停按钮 
   */
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio();
    console.log('暂停播放')
  },


/**
 * 手动输入进度
 */
listenerSeek: function(event) {
    this.data.position = event.detail.value;
    console.log(this.data.position);
},


  /** 
   * 设置进度 
   */
  listenerButtonSeek: function () {
    var position = this.data.position;
    wx.seekBackgroundAudio({
      position: parseInt(position),
    })
  },


  /** 
   *停止播放  
   */
  listenerButtonStop: function () {
    wx.stopBackgroundAudio()
    console.log('停止播放')
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /** 
    * 监听音乐播放 
    */
    wx.onBackgroundAudioPlay(function () {
      console.log('onBackgroundAudioPlay')
    })

    /** 
     * 监听音乐暂停 
     */
    wx.onBackgroundAudioPause(function () {
      console.log('onBackgroundAudioPause')
    })

    /** 
     * 监听音乐停止 
     */
    wx.onBackgroundAudioStop(function () {
      console.log('onBackgroundAudioStop')
    })  
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