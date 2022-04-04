type MicroCMSFilterQueryType<T> = {
  equals: <K extends keyof T, U extends T[K]>(
    fieldId: K,
    value: U
  ) => FilterQueryReturnType<T>
  notEquals: <K extends keyof T, U extends T[K]>(
    fieldId: K,
    value: U
  ) => FilterQueryReturnType<T>
  lessThan: <K extends keyof T, U extends T[K]>(
    fieldId: K,
    value: U
  ) => FilterQueryReturnType<T>
  greaterThan: <K extends keyof T, U extends T[K]>(
    fieldId: K,
    value: U
  ) => FilterQueryReturnType<T>
  contains: <K extends keyof T, U extends T[K]>(
    fieldId: K,
    value: U
  ) => FilterQueryReturnType<T>
  exists: <K extends keyof T>(fieldId: K) => FilterQueryReturnType<T>
  notExists: <K extends keyof T>(fieldId: K) => FilterQueryReturnType<T>
  beginsWith: <K extends keyof T, U extends T[K]>(
    fieldId: K,
    value: U
  ) => FilterQueryReturnType<T>
  _parentheses: (query: string) => FilterQueryReturnType<T>
}

type FilterQueryReturnType<T> = {
  and: () => MicroCMSFilterQueryType<T>
  or: () => MicroCMSFilterQueryType<T>
  $execute: () => string
}

export { MicroCMSFilterQueryType, FilterQueryReturnType }
