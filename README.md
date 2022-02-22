![GitHub](https://img.shields.io/github/license/rmuchall/http-status-ts)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/http-status-ts)
![npm](https://img.shields.io/npm/v/http-status-ts)

## What is http-status-ts?
http-status-ts is a tiny helper library that provides a convenient list of HTTP status codes for use with TypeScript. <br />

## Usage
HTTP status codes are provided using an enum. <br />
```
console.log(HttpStatus.INTERNAL_SERVER_ERROR);
// => 500
```
You can also obtain a text description. <br />
```
console.log(httpStatusTextByCode(HttpStatus.INTERNAL_SERVER_ERROR));
// => "Internal Server Error"
```
