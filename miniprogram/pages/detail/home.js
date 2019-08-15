// pages/detail/home.js
Page({
        /**
         * 页面的初始数据
         */

        data: {
            countDownDay: "01",
            countDownHour: "59",
            countDownMinute: "59",
            countDownS: "59",
            resetS: "重新开始",
            startS: "暂停记时",
            isStart: false,
            timeout: null,
            indicator: true,
            autoplay: true,
            interval: 5000,
            duration: 100,
            current: 1,
            vertical: false,
            easing: "easeOutCubic",
            imgUrls: [
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1263890311,3500392338&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1456792562,208798454&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=314282702,1474037284&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3215996164,913275285&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=349755255,763202793&fm=26&gp=0.jpg"
            ]
        },

        bindchange: function (e) {
            console.log("bindchange",e.detail)
        },


        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {

        }
        ,

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {

        }
        ,
        time: function () {
            let that = this.data;
            if (that.countDownS - 1 != 0) {
                that.countDownS -= 1
                this.setData({

                    // current:  that.countDownS%5
                })

            } else {
                clearTimeout(that.timeout)
                return
            }
            if (that.countDownS == 50) {
                //  console.log(that.countDownS, "时间到")

                wx.showModal({
                    title: '时间到',
                    content: "我的定时时间到了",
                    duration: 2000
                })

            }
            this.setData({
                countDownS: that.countDownS
            })
            clearTimeout(that.timeout)
            that.timeout = setTimeout(this.time, 1000);
          //  console.log(that.countDownS)
        }
        ,


        reset: function () {
            let that = this.data;
            this.setData({
                countDownDay: "01",
                countDownHour: "59",
                countDownMinute: "59",
                countDownS: "59",
                startS: "开始计时",
                isStart: false
            })
            clearTimeout(that.timeout)
            // that.timeout = setTimeout(this.time, 1000);
        }
        ,

        start: function () {
            let that = this.data;
            clearTimeout(that.timeout)
            if (that.isStart) {
                this.setData({
                    startS: "开始记时",
                    isStart: !that.isStart
                })
            } else {
                this.setData({
                    startS: "暂停记时",
                    isStart: !that.isStart
                })
                that.timeout = setTimeout(this.time, 1000);
            }
            console.log(that.countDownS)
        }
        ,
        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
            this.time()
        }
        ,


    }
)