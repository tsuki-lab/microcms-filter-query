import { describe, expect, it } from 'vitest'
import { MicroCMSFilterQuery } from '../src/main'

describe('`equals`メソッドの動作テスト', () => {
  it('gender[equals]women', () => {
    const result = new MicroCMSFilterQuery()
      .equals('gender', 'women')
      .$execute()

    expect(result).toBe('gender[equals]women')
  })
})

describe('`notEquals`メソッドの動作テスト', () => {
  it('gender[not_equals]women', () => {
    const result = new MicroCMSFilterQuery()
      .notEquals('gender', 'women')
      .$execute()

    expect(result).toBe('gender[not_equals]women')
  })
})

describe('`lessThan`メソッドの動作テスト', () => {
  it('createdAt[less_than]2019-11', () => {
    const result = new MicroCMSFilterQuery()
      .lessThan('createdAt', '2019-11')
      .$execute()

    expect(result).toBe('createdAt[less_than]2019-11')
  })
})

describe('`greaterThan`メソッドの動作テスト', () => {
  it('createdAt[greater_than]2019-10', () => {
    const result = new MicroCMSFilterQuery()
      .greaterThan('createdAt', '2019-10')
      .$execute()

    expect(result).toBe('createdAt[greater_than]2019-10')
  })
})

describe('`contains`メソッドの動作テスト', () => {
  it('title[contains]おすすめ', () => {
    const result = new MicroCMSFilterQuery()
      .contains('title', 'おすすめ')
      .$execute()

    expect(result).toBe('title[contains]おすすめ')
  })
})

describe('`exists`メソッドの動作テスト', () => {
  it('nextLink[exists]', () => {
    const result = new MicroCMSFilterQuery().exists('nextLink').$execute()

    expect(result).toBe('nextLink[exists]')
  })
})

describe('`notExists`メソッドの動作テスト', () => {
  it('nextLink[not_exists]', () => {
    const result = new MicroCMSFilterQuery().notExists('nextLink').$execute()

    expect(result).toBe('nextLink[not_exists]')
  })
})

describe('`beginsWith`メソッドの動作テスト', () => {
  it('publishedAt[begins_with]2019-11', () => {
    const result = new MicroCMSFilterQuery()
      .beginsWith('publishedAt', '2019-11')
      .$execute()

    expect(result).toBe('publishedAt[begins_with]2019-11')
  })
})
