// 下一首私人Fm

module.exports = (query, request) => {
  return request(
    'POST', `https://music.163.com/eapi/v1/radio/skip`, {},
    {crypto: 'eapi', cookie: query.cookie, proxy: query.proxy}
  )
}