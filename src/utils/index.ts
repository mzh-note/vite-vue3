// url参数拼接
export const handleParam = (data: Record<string, any>, ignoreEmpty?: boolean): string => {
  let str = ''
  for (const key in data) {
    if (!Object.prototype.hasOwnProperty.call(data, key)) {
      continue
    }
    let value = data[key]
    if (ignoreEmpty && (value === null || value === '')) {
      continue
    }
    if (value == null) {
      value = ''
    }
    if (str.length > 0) {
      str += '&'
    }
    str += key + '=' + value
  }
  return str
}
