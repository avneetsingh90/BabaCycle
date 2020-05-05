export const phoneNumber = (maxlimit:number) => (value:string)  => {
  if (!value)
    return value
  const onlyNums = value.replace(/[^\d-]/g, '')
  if(onlyNums.length <= maxlimit)
  return onlyNums;
}

export const maxLimit = (maxlimit:number) => (value:string)  => {
    if (!value)
        return value
    if(value.length <= maxlimit)
    return value;
}

export const onlyNumber = (maxlimit:number) => (value:string)  => {
    if (!value)
        return value
    const onlyNums = value.replace(/[^\d]/g, '')
    if(onlyNums.length <= maxlimit)
    return onlyNums;
}

export const alphaNumeric = (maxlimit:number) => (value:string)  => {
  const onlyWhitelist = value.replace(/[^A-Za-z0-9=@+\-.%\n!]/g, '')
  if(onlyWhitelist.length <= maxlimit)
  return onlyWhitelist;
}
