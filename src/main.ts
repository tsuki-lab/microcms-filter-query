import { ConjunctFunction, MicroCMSFilterQueryType } from "./types"

export class MicroCMSFilterQuery implements MicroCMSFilterQueryType {
  private _query = ''

  private connectFn = {
    and:() => {
      this._query += `[and]`
      return this
    },
    or: () => {
      this._query += `[or]`
      return this
    },
    $execute: () => {
      return this._query
    }
  }

  public equals = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[equals]${value}`
    return this.connectFn
  }

  public notEquals = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[not_equals]${value}`
    return this.connectFn
  }

  public lessThan = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[less_than]${value}`
    return this.connectFn
  }

  public greaterThan = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[greater_than]${value}`
    return this.connectFn
  }

  public contains = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[contains]${value}`
    return this.connectFn
  }

  public beginsWith = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[begins_with]${value}`
    return this.connectFn
  }

  public notExists = (fieldId: string): ConjunctFunction => {
    this._query += `${fieldId}[not_exists]`
    return this.connectFn
  }

  public exists = (fieldId: string): ConjunctFunction => {
    this._query += `${fieldId}[exists]`
    return this.connectFn
  }

  public _parentheses = (query: string): ConjunctFunction => {
    this._query += `(${query})`
    return this.connectFn
  }
}
