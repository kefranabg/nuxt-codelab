# nuxt-codelab

## Etape 9

Les modules sont des extensions de Nuxt.js qui augmentent ses fonctionnalités.

Nous souhaitons mettre en place un module permettant de partager le résultat de notre développement en direct.

- Installer le module `@nuxtjs/localtunnel`
```
npm install --save-dev  @nuxtjs/localtunnel
```

- Configurer le module dans `nuxt.config.js`
```
export default {
  ...
  modules: [
    [ '@nuxtjs/localtunnel', { subdomain: 'codelabzen' } ],
  ],
  ...
}
```

- Se connecter sur: `https://codelabzen.localtunnel.me/`

Pour plus d'infos: [https://nuxtjs.org/guide/modules](https://nuxtjs.org/guide/modules)
