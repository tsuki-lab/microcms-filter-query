import { MicroCMSListContent } from 'microcms-js-sdk'
import { describe, expect, it } from 'vitest'
import { MicroCMSFilterQuery } from '../src'

type Avatar = {
  id: string;
  name:string;
  age: number;
  gender: 'male' | 'female' | 'other';
} & MicroCMSListContent

type Post = {
  id: string;
  title: string;
  writer: Avatar;
  content: string;
  nextLink?: string;
} & MicroCMSListContent

describe('`equals`メソッドの動作テスト', () => {
  it('gender[equals]female', () => {
    const result = new MicroCMSFilterQuery<Avatar>()
      .equals('gender', 'female')
      .$execute()

    expect(result).toBe('gender[equals]female')
  })

  it('writer.gender[equals]female', () => {
    const result = new MicroCMSFilterQuery<Post>()
      .equals('writer.gender', 'female')
      .$execute()

    expect(result).toBe('writer.gender[equals]female')
  })
})

describe('`notEquals`メソッドの動作テスト', () => {
  it('gender[not_equals]female', () => {
    const result = new MicroCMSFilterQuery<Avatar>()
      .notEquals('gender', 'female')
      .$execute()

    expect(result).toBe('gender[not_equals]female')
  })
})

describe('`lessThan`メソッドの動作テスト', () => {
  it('createdAt[less_than]2019-11', () => {
    const result = new MicroCMSFilterQuery<Avatar>()
      .lessThan('createdAt', '2019-11')
      .$execute()

    expect(result).toBe('createdAt[less_than]2019-11')
  })
})

describe('`greaterThan`メソッドの動作テスト', () => {
  it('createdAt[greater_than]2019-10', () => {
    const result = new MicroCMSFilterQuery<Avatar>()
      .greaterThan('createdAt', '2019-10')
      .$execute()

    expect(result).toBe('createdAt[greater_than]2019-10')
  })
})

describe('`contains`メソッドの動作テスト', () => {
  it('title[contains]おすすめ', () => {
    const result = new MicroCMSFilterQuery<Post>()
      .contains('title', 'おすすめ')
      .$execute()

    expect(result).toBe('title[contains]おすすめ')
  })
})

describe('`exists`メソッドの動作テスト', () => {
  it('nextLink[exists]', () => {
    const result = new MicroCMSFilterQuery<Post>().exists('nextLink').$execute()

    expect(result).toBe('nextLink[exists]')
  })
})

describe('`notExists`メソッドの動作テスト', () => {
  it('nextLink[not_exists]', () => {
    const result = new MicroCMSFilterQuery<Post>()
      .notExists('nextLink')
      .$execute()

    expect(result).toBe('nextLink[not_exists]')
  })
})

describe('`beginsWith`メソッドの動作テスト', () => {
  it('publishedAt[begins_with]2019-11', () => {
    const result = new MicroCMSFilterQuery<Post>()
      .beginsWith('publishedAt', '2019-11')
      .$execute()

    expect(result).toBe('publishedAt[begins_with]2019-11')
  })
})
