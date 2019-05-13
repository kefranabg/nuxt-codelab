# nuxt-codelab

## Etape 4

Nous souhaitons maintenant réaliser le même système en préchargant les données dans le store.
Pour cela nous utiliserons la fonction `fetch` qui est basé sur le même principe que `asyncData`.
La méthode `fetch` est utilisée pour remplir le store avant de faire le rendu de la page. Contrairement à `asyncData`, `fetch` ne merge pas le résultat avec les data du composant.

Dans un premier temps nous allons créer un store `Vuex`. Nuxt.js génère une partie de la configuration du store à partir de l'arborescence du dossier `store` : [https://nuxtjs.org/guide/vuex-store](https://nuxtjs.org/guide/vuex-store)

- Dans le dossier `store` créer un fichier `series.js`. Nuxt générera automatiquement un module vuex `series`.

Dans ce fichier, vous devrez :
- Exporter une fonction `state` qui retourne un objet contenant une propriété `list` représentant notre liste de séries (voir [exemple ici](https://nuxtjs.org/guide/vuex-store#modules-mode)).
- Exporter un objet `mutations` qui contient une méthode `setList` permettant de modifier la liste des séries.
- Exporter un objet `actions` qui contient une méthode `fetchSeries` qui sera chargé d'appeller la méthode `getSeries` et charger le résultat dans le `state` à l'aide de la mutation.


- Dans la page `series.vue`, utiliser la fonction `fetch` pour dispatcher l'action `fetchSeries` :
``` 
fetch({ store }) {
  return store.dispatch('series/fetchSeries')
}
```
- Depuis la page `series.vue` récupérer la liste des séries du store (avec `mapState` par exemple) et les afficher sur la page. 




