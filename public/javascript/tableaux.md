# Tableaux en JavaScript

Les tableaux en JavaScript sont des listes ordonnées d'éléments accessibles via leur index (commençant à 0). Ils sont créés en utilisant des crochets `[]` et peuvent stocker des éléments de tout type (nombres, chaînes, objets, etc.). La propriété `.length` permet de connaître le nombre d'éléments présents dans le tableau.

**Exemple :**

```javascript
let fruits = ["pomme", "banane", "orange"];
console.log(fruits[0]); // Accède au premier élément "pomme"
console.log(fruits.length); // Retourne 3
```

### Méthodes courantes pour manipuler les tableaux :

| Méthode          | Description                                                                           |
|------------------|---------------------------------------------------------------------------------------|
| `.push(element)` | Ajoute un ou plusieurs éléments à la fin du tableau.                                   |
| `.pop()`         | Supprime le dernier élément du tableau.                                                |
| `.shift()`       | Supprime le premier élément du tableau.                                                |
| `.unshift(element)` | Ajoute un ou plusieurs éléments au début du tableau.                               |
| `.forEach(callback)` | Exécute une fonction pour chaque élément du tableau.                              |
| `.includes(element)` | Vérifie si le tableau contient l'élément spécifié.                                |

**Exemples d'utilisation :**

- **Ajouter un élément à la fin d'un tableau :**

```javascript
fruits.push("mangue");
console.log(fruits); // ["pomme", "banane", "orange", "mangue"]
```

- **Supprimer le dernier élément :**

```javascript
fruits.pop();
console.log(fruits); // ["pomme", "banane", "orange"]
```

- **Supprimer le premier élément :**

```javascript
fruits.shift();
console.log(fruits); // ["banane", "orange"]
```

- **Ajouter un élément au début du tableau :**

```javascript
fruits.unshift("fraise");
console.log(fruits); // ["fraise", "banane", "orange"]
```

- **Itérer sur chaque élément avec `.forEach()` :**

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Affiche "fraise", "banane", "orange"
```

- **Vérifier si un tableau contient un élément :**

```javascript
let hasBanane = fruits.includes("banane");
console.log(hasBanane); // true
```