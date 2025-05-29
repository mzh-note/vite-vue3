import { Md5 } from 'ts-md5'

// 针对secinfo接口中appId=jgj/gms的所有请求参数进行md5处理
export const md5SecinfoReq = (opt: any) => {
  const options = { ...opt }
  // 匹配 /api/secinfo/api/ 开头的接口
  if (options.url && options.url.match(/\/secinfo\/api\//)) {
    if (typeof options.params !== 'object') {
      options.params = {}
    }
    const hasParams = options.url.match(/\?/)
    // 把url中?后的所有参数通过options.params的key-value处理
    if (hasParams) {
      const urlParams = options.url.slice((hasParams.index as number) + 1)
      if (urlParams) {
        const arr = urlParams.split('&')
        options.url = options.url.slice(0, hasParams.index)
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].length > 0) {
            const item = arr[i].split('=')
            options.params[item[0]] = item[1]
          }
        }
      }
    }
    // console.log('===options', options);
    // if (options.params.appId && options.params.appId !== 'jgj' && options.params.appId !== 'gms') {
    //   return options;
    // }
    // 先只把商机地图部分改成gms，后续jgj也要改的话再加
    // if (options.params.appId && options.params.appId !== 'gms') {
    //   return options;
    // }
    // 所有secinfo接口，没有appId或appId=jgj/gms的统一指定appId=gms
    options.params.appId = 'gms'
    options.params.t = new Date().getTime()
    // 把key筛选出来，按字母排序，进行md5加密
    const keysArray: string[] = []

    for (const key in options.params) {
      keysArray.push(key)
    }
    keysArray.sort()
    const queryParams: string[] = []
    for (let i = 0; i < keysArray.length; i += 1) {
      const currKey = keysArray[i]
      if (options.params[currKey] !== null) {
        if (typeof options.params[currKey] === 'string' && options.params[currKey].length === 0) {
          continue
        }
        if (typeof options.params[currKey] === 'undefined') {
          continue
        }
        if (typeof options.params[currKey] === 'string') {
          queryParams.push(`${currKey}=${options.params[currKey].trim()}`)
        } else {
          queryParams.push(`${currKey}=${options.params[currKey]}`)
        }
      }
    }
    options.params.sign = Md5.hashStr(queryParams.join('&'))
  }
  return options
}
