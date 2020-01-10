module.exports = (query, request) => {
  const data = {
    'e_r': true
  };
  Object.keys(query).forEach(i => {
    if (/^\/api\//.test(i)) {
      data[i] = query[i]
    }
  })
  return request(
    'POST', `http://music.163.com/eapi/batch`, data,
    {crypto: 'eapi', proxy: query.proxy, url: '/api/batch', cookie: query.cookie}
  ).then(response => {
    console.log(response)
    // let playable = false
    // if(response.body.code == 200){
    //   if(response.body.data[0].code == 200){
    //     playable = true
    //   }
    0    // }
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
};