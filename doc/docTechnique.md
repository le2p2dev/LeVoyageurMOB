# Documentation leVoyageur mobile

L’application mobile a été développé avec react native.

Nous avons 2 principaux dossier de code :

- Un pour les [Screen](../views/), qui contient les code permettant l’affichage uniquement
- Un pour les [composants](../components/), qui seront ensuite importé dans les Screen

Les composants peuvent être réutilisé, il faut bien penser à

Le composant [NavBar](../components/NavBar.jsx) doit être réutilisé sur toutes les pages car il permet la navigation entre les différents mode.

Pour ajouter un mode, il faut créer des composants, l’ajouter dans un fichier Screen puis créer une stack.screen avec react-navigation dans App.js, puis ajouter une icône et le lien su nouveau stack.screen dans navmode.js

Nous avons utilisé [react-navigation](https://reactnavigation.org/) pour pouvoir passer d’une page à l’autre, tous les fichiers d’affichage sont alors définis dans [App.js](../App.js) dans un stack.screen.

Pour tous les appels en base de données, il faut ajouter une fonction d’appel à l’api (voir doc api) dans [listApi.js](../components/listApi.js), et veiller à récupérer le token dans le AsyncStorage.
Ensuite dans votre composant il faut utiliser react-query, en utilisant votre fonction d’appel à l’api de listApi.js avec useQuery.

Pour modifier une donnée ou la supprimer il faut utiliser useMutation de [react-query](https://react-query.tanstack.com/) également, ce qui permet d’actualiser le cache créer par react-query.

## Lancer le projet

Cette application est créée avec expo, pour la lancer, installer les dépendances avec yarn et la commande :

```js
$ yarn install
```

ensuite la commande

```bash
$ expo start
```

lancera le projet
