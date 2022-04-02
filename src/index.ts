import { MicroCMSFilterQueryType } from './type'

export class MicroCMSFilterQuery implements MicroCMSFilterQueryType {
  private _query = ''

  private connectFn = {
    and:() => {
      this._query += `[and]`
      return {
        ...this,
        _parentheses: (query: string) => {
          this._query += `(${query})`
          return this.connectFn
        }
      }
    },
    or: () => {
      this._query += `[or]`
      return {
        ...this,
        _parentheses: (query: string) => {
          this._query += `(${query})`
          return this.connectFn
        }
      }
    },
    $execute: () => {
      return this._query
    }
  }

  public equals = (fieldId: string, value: string) => {
    this._query += `${fieldId}[equals]${value}`
    return this.connectFn
  }

  public notEquals = (fieldId: string, value: string) => {
    this._query += `${fieldId}[not_equals]${value}`
    return this.connectFn
  }

  public lessThan = (fieldId: string, value: string) => {
    this._query += `${fieldId}[less_than]${value}`
    return this.connectFn
  }

  public greaterThan = (fieldId: string, value: string) => {
    this._query += `${fieldId}[greater_than]${value}`
    return this.connectFn
  }

  public contains = (fieldId: string, value: string) => {
    this._query += `${fieldId}[contains]${value}`
    return this.connectFn
  }

  public beginsWith = (fieldId: string, value: string) => {
    this._query += `${fieldId}[begins_with]${value}`
    return this.connectFn
  }

  public notExists = (fieldId: string) => {
    this._query += `${fieldId}[not_exists]`
    return this.connectFn
  }

  public exists = (fieldId: string) => {
    this._query += `${fieldId}[exists]`
    return this.connectFn
  }
}
