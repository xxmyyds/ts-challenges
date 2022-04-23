type Length<T extends readonly any[]> = T['length']

// tuple 的length是具体的数值，因为它有固定的长度
// 普通arr的length是number类型，因为它没有固定的长度
