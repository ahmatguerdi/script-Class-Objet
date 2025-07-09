# Les classes et les objets en JavaScript

Créer une classe `Stock` ayant les proprétés en méthodes suivantes.

1. Propriétés:

    - `shop`, la boutique de type `String` avec une visibilité privée
    - `location`, lieux de type `String` avec une visibilité privée
    - `products`, la liste des produits de type `Array`.

    Chaque élément de la liste (i.e. un produit) à les propriétés suivantes:

    - `id`, une valeur numérique généré aléatoirement
    - `productName`, le nom du produit
    - `price`, le prix du produit
    - `stockStatus`, le status du produit en stock ('en stock', 'petite stock', 'pas en stock')

2. Méthodes:

    - `getProducts` qui retournes la liste des produits
    - `creadProduct` qui permet d'ajouter un nouveau produit à la liste des produits
    - `readProduct` qui prend en argument une `id` et retourne le produit ayant cette `id`
    - `updateProduct` qui prend en paramètre une `id`, le nouveau nom de produit `newProductName` et un nouveau prix `newPrice` et modifier le produit ayant l'`id` avec les nouvelles informations
    - `updateProductStatus` qui prend en paramètre une `id` et un nouveau `stockStatus` et modifier le status du produit
    - `deleteProduct` qui prend en paramètre une `id` et retire le produit ayant cette `id` de la liste de produit

3. Ressources

    - [MDN Web Docs - Classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
    - [MDN Web Docs - Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - [MDN Web Docs - For](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for)
