type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

function tupleToObject(arr) {
  const obj = {}

  arr.forEach((item) => {
    obj[item] = item
  })

  return obj
}

// 遍历数组 T[number]
// extends 类型约束
