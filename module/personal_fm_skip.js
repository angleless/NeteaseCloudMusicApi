// 下一首私人Fm

module.exports = (query, request) => {
  return request(
    'POST', `http://music.163.com/eapi/v1/radio/skip`, {},
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  ).then(response => {
    console.log(response)
    // let playable = false
    // if(response.body.code == 200){
    //   if(response.body.data[0].code == 200){
    //     playable = true
    //   }
    // }
    // if(playable){
    //   response.body = {success: true, message: 'ok'}
    //   return response
    // }
    // else{
    //   response.status = 404
    //   response.body = {success: false, message: '亲爱的,暂无版权'}
    //   return Promise.reject(response)
    // }
  })
}