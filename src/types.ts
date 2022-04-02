type FilterQueryValue = (fieldId: string, value: string) => ConnectFn
type FilterQueryNotValue = (fieldId: string) => ConnectFn

type MicroCMSFilterQueryType = {
  equals: FilterQueryValue
  notEquals: FilterQueryValue
  lessThan: FilterQueryValue
  greaterThan: FilterQueryValue
  contains: FilterQueryValue
  beginsWith: FilterQueryValue
  notExists: FilterQueryNotValue
  exists: FilterQueryNotValue
}

type ConnectFn = {
  and: () => AndOrFn
  or: () => AndOrFn
  $execute: () => string
}

type AndOrFn = MicroCMSFilterQueryType & {
  _parentheses: (query: string) => ConnectFn
}

export { MicroCMSFilterQueryType, ConnectFn }