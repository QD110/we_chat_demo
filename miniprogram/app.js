//app.js
App({

        onLaunch: function () {

            var thaa = this;
            thaa.curid = wx.getStorageSync('curid') || thaa.curid;

            thaa.setlocal('curid', thaa.curid);
        },
        setlocal: function (id, val) {
            wx.setStorageSync(id, val);//API：设置本地缓存
        },
        curid: "钱金磊",
        version: "2.0.1"


    }
)
