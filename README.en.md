<div align="center">

![](./client/public/favicon_48x48.png)
\
_The definitive source for\
Guaraní myths and folklore_

[es](README.md) / [en](README.en.md)

</div>

## Introduction

Explore **Guaraní** mythology through this API. Access the seven legendary monsters, their summarized history, and related images.

## Getting started

The base url contains information about all available API's resources. All requests are `GET` requests and go over `https`. All responses will return data in `json`.

- Base url: https://warani.vercel.app/api

### Example

```js
fetch("https://warani.vercel.app/api/myths/1?lang=en")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Response

```json
{
  "id": 1,
  "image": "https://warani.vercel.app/images/...",
  "name": "Taú and Keraná",
  "description": "This causes deep sadness..."
}
```

## Contributing

If you have suggestions to improve the project, please [fork] the repository and create a [pull_request], or simply open an [issue] with the "_enhancement_" tag.

[fork]: https://github.com/emrocode/guarani-myths/fork
[pull_request]: https://github.com/emrocode/guarani-myths/pulls
[issue]: https://github.com/emrocode/guarani-myths/issues
