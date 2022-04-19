type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

function readonly(obj) {
  const res = {}

  for (const key in obj) {
    res['readonly' + key] = obj[key]
  }

  return res
}
