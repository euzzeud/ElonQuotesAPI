# ELON QUOTES API

## What is the purpose of this API?

The purpose of this API is simple! Provide you with quotes from famous Space X founder, Elon Musk!
To use it, you do not need to authenticate yourself or a specific token. The API is open and free! It will allow you to enrich all your projects with beautiful quotes from Elon Musk.

## Endpoints

Here are the different Endpoints that you can use with the API.

**ALL QUOTES**
```js
GET /api/all
```
**RANDOM QUOTES**
```js
GET /api/random
```
**QUOTE BY ID**
```js
GET /api/id/:id
```

## Example

```js
fetch("http://localhost:8080/api/random")
    .then(res => res.json())
    .then(json => {
  console.log(json)
  /* Expected output:
    {
        "id": 1,
        "quote": "When something is important enough, you do it even if the odds are not in your favor.",
    }
    */
});
```

## Learn more...

**Website:** *https://elon-quotes-api.euzzeud.x-h.fr*
**Open an issue:** *https://github.com/euzzeud/ElonQuotesAPI/issues*
**Twitter:** https://twitter.com/euzzeud
