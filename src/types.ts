import { UnionToIntersection } from 'type-fest'

type ConvertObjectToPrimitive<T extends Exclude<object, null>> = {
  [K in keyof T]: T[K] extends Exclude<object, null> ? string : T[K]
}

type PrependProperty<T extends Exclude<object, null>, P extends string> = {
  [K in Extract<keyof T, string> as `${P}.${K}`]: T[K]
}

type ProcessObject<T extends Exclude<object, null>> = {
  [K in Extract<keyof T, string> as T[K] extends Exclude<object, null>
    ? K
    : never]: T[K] extends Exclude<object, null>
    ? PrependProperty<InternalFilterQuery<T[K]>, K>
    : never
}

type InternalFilterQuery<T extends Exclude<object, null>> =
  ConvertObjectToPrimitive<T> &
    UnionToIntersection<ProcessObject<T>[keyof ProcessObject<T>]>

type FilterQuery<T extends Exclude<object, null>> = {
  [K in keyof InternalFilterQuery<T>]: InternalFilterQuery<T>[K]
}

export { FilterQuery }
