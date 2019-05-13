# nuxt-codelab

## Etape 8

Nous souahitons exécuter une fonction avant le rendu d'une page.

Exemple d'utilisation: contrôle de la sécurité.

Pour cela, vous devrez utiliser la notion de `middleware`.

- Créer un fichier `middleware/chrome_only.js`
```
export default function (context) {
  
  const { store, req, redirect } = context

  const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent

  if (userAgent.indexOf('Chrome') == -1) {
    redirect('/forbidden_page')
  }

}
```

- Configuration: 
  - au niveau d'une page
  ```
  export default {
    middleware: 'chrome_only'
  }
  ```

  - au de la config de Nuxt (`nuxt.config.js`) [pour toutes les pages]
  ```
  export default {
    ...
    router: {
      middleware: 'chrome_only'
    }
    ...
  }
  ```

Pour plus d'infos: [https://nuxtjs.org/guide/routing#middleware](https://nuxtjs.org/guide/routing#middleware)

Middleware pour le serveur uniquement:
- Céer un fichier `api/logger.js`
```
export default function (req, res, next) {
    console.log(req.url)

    // Ne pas oublier d'appeler cette fonction pour enchaîner les appels aux différents middlewares
    next()
}
```

- Configurer `nuxt.config.js`:
```
import serveStatic from 'serve-static'

export default {
  ...
  serverMiddleware: [

      '~/api/logger',

      // Exemple d'un middleware présent dans npm
      'redirect-ssl',

      { path: '/static2', handler: serveStatic(__dirname + '/static2') }
  ]
  ...
}
```

Pour plus d'infos: [https://nuxtjs.org/api/configuration-servermiddleware](https://nuxtjs.org/api/configuration-servermiddleware)

