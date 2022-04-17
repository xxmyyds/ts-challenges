type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

function myPick(todo, keys) {
  const obj = {}

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })

  return obj
}
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// https://www.typescriptlang.org/docs/handbook/2/generics.html
