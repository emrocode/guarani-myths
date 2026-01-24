<div align="center">

![](./client/public/favicon_48x48.png)
\
_La fuente definitiva sobre\
los mitos y el folclore guaraní_

[es](README.md) / [en](README.en.md)

</div>

## Introducción

Explora la mitología **guaraní** a través de esta API. Accede a los siete monstruos legendarios, su historia resumida e imágenes relacionadas.

## Para empezar

La url base contiene información sobre todos los recursos disponibles de la API. Todas las peticiones son `GET` y van sobre `https`. Todas las respuestas devolverán datos en formato `JSON`.

- Base url: https://warani.vercel.app/api

### Ejemplo

```js
fetch("https://warani.vercel.app/api/myths/1?lang=es")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Respuesta

```json
{
  "id": 1,
  "image": "https://warani.vercel.app/images/...",
  "name": "Taú y Keraná",
  "description": "Taú era un espíritu maléfico que..."
}
```

## Contribuir al proyecto

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [fork] del repositorio y crea una [pull_request] o puedes simplemente abrir una [issue] con la etiqueta «_enhancement_».

[fork]: https://github.com/emrocode/guarani-myths/fork
[pull_request]: https://github.com/emrocode/guarani-myths/pulls
[issue]: https://github.com/emrocode/guarani-myths/issues
