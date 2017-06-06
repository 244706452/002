// pages/download/download.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    urls: [],
    current: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */

  bindTapImage: function () {
    wx.previewImage({
      current: this.data.current,
      urls: this.data.urls,
    })
  },

  onLoad: function (options) {
    var self = this;
    var id = options.id;
    wx.request({
      url: 'https://dev.mall.keku365.com/',
      success: function (res) {
        self.setData({ images: res.data.images });
        var images = self.data.images;
        var urls = [];
        var current = '';
        for (var i = 0; i < self.data.images.length; i++) {
          urls.push(self.data.images[i].url);
          self.setData({ urls: urls });
          if (id == images[i].id) {
            current = self.data.images[i].url;
            self.setData({ current: current });
          }
        }
      }
    });

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