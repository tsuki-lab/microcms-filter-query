type MicroCMSFilterQueryType = {
  equals: (fieldId: string, value: string) => ConjunctFunction
  notEquals: (fieldId: string, value: string) => ConjunctFunction
  lessThan: (fieldId: string, value: string) => ConjunctFunction
  greaterThan: (fieldId: string, value: string) => ConjunctFunction
  contains: (fieldId: string, value: string) => ConjunctFunction
  exists: (fieldId: string) => ConjunctFunction
  notExists: (fieldId: string) => ConjunctFunction
  beginsWith: (fieldId: string, value: string) => ConjunctFunction
  _parentheses: (query: string) => ConjunctFunction
}

type ConjunctFunction = {
  and: () => MicroCMSFilterQueryType
  or: () => MicroCMSFilterQueryType
  $execute: () => string
}

export { MicroCMSFilterQueryType, ConjunctFunction }