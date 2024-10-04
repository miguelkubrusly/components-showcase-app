
declare global {


  type ExcludeFromObject<T extends any[], U> = {
    [K in keyof T]: T[K] extends U ? never : T[K]
  }[number]

  type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E ? E extends string ? Record<E, U> & { [k in ExcludeFromObject<T, E>]?: never } : never : never

  type MapObject<T, O extends object> = {
    [K in keyof O]: T
  }

}

export { }