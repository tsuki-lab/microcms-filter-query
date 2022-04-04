# microcms-filter-query

[microcms](https://microcms.io/)のリスト API の get クエリ、`filter`の条件文の作成補助ツール

## Installed

```bash
npm i microcms-filter-query
# or
yarn add microcms-filter-query
```

## Usage

basic usage.

```js
const { MicroCMSFilterQuery } = require('microcms-filter-query') // CommonJS
import { MicroCMSFilterQuery } from 'microcms-filter-query' //ES6

// gender[equals]women
const filterQuery = new MicroCMSFilterQuery()
  .equals('gender', 'women')
  .$execute()

// Get request to microcms
axios.get('https://{SERVICE_ID}.microcms.io/api/v1/{END_POINT}', {
  headers: {
    'X-MICROCMS-API-KEY': `{API_KEY}`,
  },
  params: {
    filters: filterQuery,
  },
})
```

usage for TypeScript.

```ts
import { MicroCMSFilterQuery } from 'microcms-filter-query'

type Avatar = {
  name: string
  gender: 'women' | 'male'
}

// gender[equals]women
const filterQuery = new MicroCMSFilterQuery<Avatar & MicroCMSListContent>()
  .equals('gender', 'women') // argument is type safe
  .$execute()

// Get request to microcms
axios.get<MicroCMSListResponse<Avatar>>(
  'https://{SERVICE_ID}.microcms.io/api/v1/{END_POINT}',
  {
    headers: {
      'X-MICROCMS-API-KEY': `{API_KEY}`,
    },
    params: {
      filters: filterQuery,
    },
  }
)
```
