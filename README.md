# nuxt-codelab

## Etape 10

Avec les plugins, Nuxt permet l'exécution de code avant d'instancier l'application Vue.js racine.
Pratique pour l'utilisation de libs externes ou des vôtres.

- Créer un fichier `plugins/vue-logger.js` (export d'une fonction `log` faisant juste un console.log)
```
import Vue from 'vue'

Vue.prototype.$log = (string) => console.log(">>> " + string)
```
- Configurer `nuxt.config.js`
```
export default {
  ...
  plugins: ['~/plugins/vue-logger.js']
  ...
}
```
- Utiliser la nouvelle fonction dans un composant
```
export default {
  mounted() {
    this.$log('mounted de mon composant')
  }
}
```

Il est aussi possible d'injecter la fonction dans le contexte
- Créer un fichier `plugins/ctx-logger.js` avec une fonction `log` injecté dans l'app (champ de context)
```
export default ({ app }, inject) => {
  app.log = (string) => console.log('Okay, another function', string)
}
```
- Ajouter le plugin dans `nuxt.config.js`
- Utiliser la fonction `log` dans une fonction `asyncData`
```
export default {
  asyncData(context){
    context.app.log('asyncData !!')
  }
}
```

Il existe aussi une possibilité de créer une fonction qui combine les 2 types d'injection.
Pour plus d'infos: [https://nuxtjs.org/guide/plugins](https://nuxtjs.org/guide/plugins)
