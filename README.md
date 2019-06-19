# nuxt-codelab

## Etape 5

Dans cette étape, nous allons réaliser une page dédiée aux details d'une série. L'utilisateur doit pouvoir cliquer sur un item de la liste des séries et arriver sur une nouvelle page.
Voici la structure de l'url attendue : `/series/:id`

Consulter la documentation pour voir comment créer une route dynamique : [https://nuxtjs.org/guide/routing#dynamic-routes](https://nuxtjs.org/guide/routing#dynamic-routes)

- Créer une page pour visualiser les détails de la série sélectionnée
- Sur la page `/pages/series.vue`, ajouter une balise `nuxt-link` pour pouvoir naviguer vers la page détails d'une série
- Sur la page détail d'une série, récupérer l'id depuis l'url (`this.$route.params.id`) et utiliser cette id pour aller chercher la série correspondante à partir du store (Utiliser un getter vuex est un plus ;) ).

``` 
// Getter Vuex
export const getters = {
  getSerieById: (state) => (serieId) => state.list.find(serie => serie.id == serieId)
}
```

- Afficher des informations de la série récupérée sur la page détail
- Une fois sur la page `/series/:id`, recharger la page dans le navigateur. Comment résoudre cette erreur ? 

