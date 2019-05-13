# nuxt-codelab

## Etape 7


Nous souhaitons mettre en place un sysème de validation permettant de contrôle les paramètres d'un appel par exemple.

- Créer une méthode `validate` dans `pages/series/_id.vue` pour contrôler que l'id est un nombre
```
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
```
- Tester le résultat en se connectant à plusieurs urls: `http://localhost:3000/series/bad` ou `http://localhost:3000/series/0`

Pour plus d'infos: [https://nuxtjs.org/api/pages-validate](https://nuxtjs.org/api/pages-validate)

