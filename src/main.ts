import { MicroCMSFilterQueryType, FilterQueryReturnType } from './types'

/**
 * create to `filters` query params for microcms
 *
 * @export
 * @class MicroCMSFilterQuery
 * @implements {MicroCMSFilterQueryType}
 */
export class MicroCMSFilterQuery<T = any> implements MicroCMSFilterQueryType<T> {
  private _query = ''

  private connectFn: FilterQueryReturnType<T> = {
    and: () => {
      this._query += `[and]`
      return this
    },
    or: () => {
      this._query += `[or]`
      return this
    },
    $execute: () => {
      return this._query
    },
  }

  /**
   * add query for `equals`
   *
   * @param {K} fieldId
   * @param {U} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public equals = <K extends keyof T, U extends T[K]>(fieldId: K, value: U): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[equals]${value}`
    return this.connectFn
  }

  /**
   * add query for `not_equals`
   *
   * @param {K} fieldId
   * @param {U} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public notEquals = <K extends keyof T, U extends T[K]>(fieldId: K, value: U): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[not_equals]${value}`
    return this.connectFn
  }

  /**
   * add query for `less_than`
   *
   * @param {K} fieldId
   * @param {U} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public lessThan = <K extends keyof T, U extends T[K]>(fieldId: K, value: U): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[less_than]${value}`
    return this.connectFn
  }

  /**
   * add query for `greater_than`
   *
   * @param {K} fieldId
   * @param {U} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public greaterThan = <K extends keyof T, U extends T[K]>(fieldId: K, value: U): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[greater_than]${value}`
    return this.connectFn
  }

  /**
   * add query for `contains`
   *
   * @param {K} fieldId
   * @param {U} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public contains = <K extends keyof T, U extends T[K]>(fieldId: K, value: U): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[contains]${value}`
    return this.connectFn
  }

  /**
   * add query for `begins_with`
   *
   * @param {K} fieldId
   * @param {U} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public beginsWith = <K extends keyof T, U extends T[K]>(fieldId: K, value: U): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[begins_with]${value}`
    return this.connectFn
  }

  /**
   * add query for `not_exists`
   *
   * @param {K} fieldId
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public notExists = <K extends keyof T>(fieldId: K): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[not_exists]`
    return this.connectFn
  }

  /**
   * add query for `exists`
   *
   * @param {K} fieldId
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public exists = <K extends keyof T>(fieldId: K): FilterQueryReturnType<T> => {
    this._query += `${fieldId}[exists]`
    return this.connectFn
  }

  /**
   *  add to arg `query` between `(`,`)`
   *
   * @param {string} query
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public _parentheses = (query: string): FilterQueryReturnType<T> => {
    this._query += `(${query})`
    return this.connectFn
  }
}
