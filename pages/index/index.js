//index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    images:[],
  },

  bindTapImage: function(event){
    var index = event.currentTarget.dataset.index;

    /* 新页面预览 */
    // var id = this.data.images[index].id;
    // wx.navigateTo({
    //   url: '../download/download?id=' + id,
    // })
    
    /* 普通预览 */
    var urls= [];
    for(var i = 0; i<this.data.images.length;i++){
        urls.push(this.data.images[i].url);
    }
    wx.previewImage({
      current:this.data.images[index].url,
      urls: urls,
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
      wx.request({
        url: 'https://dev.mall.keku365.com/',
        success:function(res){
          self.setData({images:res.data.images});
        }
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