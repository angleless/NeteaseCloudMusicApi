// 下一首私人Fm

module.exports = (query, request) => {
  return request(
    'POST', `https://music.163.com/weapi/v1/radio/skip`, {},
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
}