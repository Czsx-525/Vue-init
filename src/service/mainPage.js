export function getAdvises () {
  // return axios.get('/index-infos');
  const advises = [{
    // imageUrl: require('../../public/adviseImages/advise1.jpg'),
    imageUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    redirectUrl: 'https://www.baidu.com/'
  },
  {
    imageUrl: require('../../public/adviseImages/advise2.jpg'),
    redirectUrl: 'https://cn.bing.com/'
  }, {
    imageUrl: require('../../public/adviseImages/advise3.jpg'),
    redirectUrl: 'https://vant-contrib.gitee.io/vant/v3/#/zh-CN'
  }
  ]
  return advises
}
