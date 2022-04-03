import { ConjunctFunction, MicroCMSFilterQueryType } from './types'

/**
 * create to `filters` query params for microcms
 *
 * @export
 * @class MicroCMSFilterQuery
 * @implements {MicroCMSFilterQueryType}
 */
export class MicroCMSFilterQuery implements MicroCMSFilterQueryType {
  private _query = ''

  private connectFn = {
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
   * @param {string} fieldId
   * @param {string} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public equals = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[equals]${value}`
    return this.connectFn
  }

  /**
   * add query for `not_equals`
   *
   * @param {string} fieldId
   * @param {string} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public notEquals = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[not_equals]${value}`
    return this.connectFn
  }

  /**
   * add query for `less_than`
   *
   * @param {string} fieldId
   * @param {string} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public lessThan = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[less_than]${value}`
    return this.connectFn
  }

  /**
   * add query for `greater_than`
   *
   * @param {string} fieldId
   * @param {string} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public greaterThan = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[greater_than]${value}`
    return this.connectFn
  }

  /**
   * add query for `contains`
   *
   * @param {string} fieldId
   * @param {string} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public contains = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[contains]${value}`
    return this.connectFn
  }

  /**
   * add query for `begins_with`
   *
   * @param {string} fieldId
   * @param {string} value
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public beginsWith = (fieldId: string, value: string): ConjunctFunction => {
    this._query += `${fieldId}[begins_with]${value}`
    return this.connectFn
  }

  /**
   * add query for `not_exists`
   *
   * @param {string} fieldId
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public notExists = (fieldId: string): ConjunctFunction => {
    this._query += `${fieldId}[not_exists]`
    return this.connectFn
  }

  /**
   * add query for `exists`
   *
   * @param {string} fieldId
   * @memberof MicroCMSFilterQuery
   * @return {ConjunctFunction}
   */
  public exists = (fieldId: string): ConjunctFunction => {
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
  public _parentheses = (query: string): ConjunctFunction => {
    this._query += `(${query})`
    return this.connectFn
  }
}
