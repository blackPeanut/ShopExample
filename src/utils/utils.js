export const cleanString = (str) => {
  return str.replace(/[\W_]+/g, ' ')
}

export const capitalize = (str) => {
  if (!str) return
  let string = str.toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1)
}
