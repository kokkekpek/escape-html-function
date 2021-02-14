# README

## Build demo
```sh
cd /path/to/project
yarn install
yarn webpack
```

## Use
```sh
yarn add kokkekpek/escape-html-function
```

```ts
import escapeHTML from 'escape-html-function'

const html: string = `<div>&nbsp</div>`
const result: string = escapeHTML(html)
console.log(result)
```