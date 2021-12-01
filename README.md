# fetchw

This library is fetch wrapper.

## Installation

```shell
npm install fetchw
```

### or

```shell
yarn add fetchw
```

## Usage

This is all you need to get started:

```ts
const fetchw = require('fetchw');
fetchw.get({ endpoint: '/users' });

fetchw.patch({
  endpoint: '/users',
  payload: {
    uuid,
    username,
  },
});

fetchw.post({
  endpoint: '/users',
  payload: {
    email,
    username,
    password,
  },
});
```

### or es6

```ts
import { get } from 'fetchw';
get({ endpoint: '/users' });

patch({
  endpoint: '/users',
  payload: {
    uuid,
    username,
  },
});

post({
  endpoint: '/users',
  payload: {
    email,
    username,
    password,
  },
});
```

## License

[MIT](https://github.com/ogasawaraShinnosuke/fetchw/blob/main/LICENSE)
