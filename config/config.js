const name = "lilishop"; //全局商城name
const schemeName = 'lilishop' //唤醒app需要的schemeName
export default {
  name: name,
  schemeLink: `${schemeName}://`, //唤起app地址
  downloadLink: "https://pickmall.cn/download-page/index.html", //下载地址，下载app的地址
  shareLink: "https://h5.zmshops.xycloud.info", //分享地址，也就是在h5中默认的复制地址
  appid: "wx6f10f29075dc1b0b", //小程序唯一凭证，即 AppID，可在「微信公众平台 - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）
  aMapKey: "d649892b3937a5ad20b76dacb2bcb5bd", //在高德中申请Web服务key
  scanAuthNavigation:['https://h5.zmshops.xycloud.info/'], //扫码认证跳转域名配置 会根据此处配置的路由进行跳转
  iosAppId:"id1564638363", //AppStore的应用地址id 具体在分享->拷贝链接中查看
  logo:"https://lilishop-oss.oss-cn-beijing.aliyuncs.com/4c864e133c2944efad1f7282ac8a3b9e.png", //logo地址
  customerServiceMobile:"18695603075", //客服电话
  customerServiceEmail:"liukai@quanwu.info", //客服邮箱 
  imWebSrc:"https://im.zmshops.xycloud.info" //IM地址 
}; 
