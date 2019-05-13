# nuxt-codelab

## Etape 3

Nous souhaitons maintenant charger les données (liste des séries) afin de les afficher dans la page `pages/series.vue`.
Pour cela, vous devrez utiliser la fonction `getSeries` du fichier `services/api.service.js`.

- Utiliser la fonction `asyncData` pour charger la liste des séries et les afficher sur la page : [https://nuxtjs.org/guide/async-data](https://nuxtjs.org/guide/async-data)

`asyncData` permet de charger des données avant le rendu d'une page. Cette méthode peut être executer côté serveur ou client.

- Dans la méthode `asyncData`, ajouter `console.log('asyncData')`
- Aller sur la page `/` puis naviguer vers `/series`

On remarque que le log `asyncData` est visible sur la console du navigateur car la fontion `asyncData` a été éxécutée côté client. Quand un changement de route est effectué, il n'y a pas de requête envoyée vers le serveur, tout se passe côté client (rafraichissement du template HTML avec vue.js).

- Aller sur la page `/series` et recharger la page à partir de votre navigateur.

On remarque que le log `asyncData` est visible sur les logs du serveur car une requête est envoyé au serveur Nuxt pour effectuer le premier rendu.

Voir schéma [https://docs.google.com/presentation/d/1PXWL7s8s0kT9SzKdYxOkVf6gKsCSudSsQF9KTZe7_QM/edit#slide=id.g5809f050c0_0_314](https://docs.google.com/presentation/d/1PXWL7s8s0kT9SzKdYxOkVf6gKsCSudSsQF9KTZe7_QM/edit#slide=id.g5809f050c0_0_314)


