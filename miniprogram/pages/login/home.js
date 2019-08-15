// pages/login/home.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */

    data: {
        userName: "",
        passWord: "",
        userN: "",
        passW: ""

    },

    //用户名和密码输入框事件
    passwordInput: function (e) {
        this.setData({
            passW: e.detail.value
        })
    },    //用户名和密码输入框事件
    userNameInput: function (e) {
        this.setData({
            userN: e.detail.value
        })
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

    },

    next: function () {
        var data = this.data;
        wx.request({
            url: "http://47.110.33.183:8081/android/user/accountLogin",
            method: "POST",
            data: {
                mobile: data.userN,
                password: data.passW
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                console.log("success", res.data)
            },
            fail: function (err) {
                console.log("fail", err.data)
            }

        })
    },
    resetClick: function () {
        var data = this.data;
        this.setData({
            userName: "",
            passWord: "",
            userN: "",
            passW: "",
        })

    }
})