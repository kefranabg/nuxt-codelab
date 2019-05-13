# nuxt-codelab

## Etape 6

Nous souhaitons mettre en place des métas données dans la balise `<header>` pour nos différentes pages HTML

Pour cela, Nuxt fournit 2 méthodes:
- via une configuration générale contenue dans `nuxt.config.js`
- via une fonction `head()` implémentée dans chaque composant

- Configurer le fichier `nuxt.config.js` pour la configuration générale
```
import pkg from './package'

export default {
  ...
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ...
}
```

- Configurer le fichier `pages/series.vue` pour mettre un titre dynamique dans les méta données

```
export default {
  data() {
    return { list: [] },
  },

  head() {
    return {
      title: 'Series: ' + this.list.length
    }
  }
}
```

Vérifier dans les sources HTML du navigateur si la méta donnée est bien présente.

Basé sur `vue-meta`: [https://github.com/nuxt/vue-meta](https://github.com/nuxt/vue-meta)
Pour plus d'infos: [https://nuxtjs.org/api/pages-head#the-head-method](https://nuxtjs.org/api/pages-head#the-head-method)

