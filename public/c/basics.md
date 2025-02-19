# Bases en C

## Commentaires en C

- **Commentaires sur une seule ligne** : Utilisez deux barres obliques (`//`) pour ajouter un commentaire sur une seule ligne.  
  **Exemple :**
  ```c
  // Ceci est un commentaire sur une seule ligne
  ```

- **Commentaires sur plusieurs lignes** : Pour les commentaires plus longs ou couvrant plusieurs lignes, utilisez `/*` pour débuter et `*/` pour fermer.  
  **Exemple :**
  ```c
  /*
  Ceci est un commentaire
  sur plusieurs lignes
  */
  ```

## Structure générale d'un programme en C

Un programme C se compose généralement de la structure suivante :

1. **Inclusion des bibliothèques** : La plupart des programmes C utilisent la bibliothèque standard `stdio.h` pour les entrées/sorties.
2. **Définition de la fonction principale** : Tout programme C commence l'exécution à partir de la fonction `main()`.
3. **Instructions** : Le corps de la fonction principale contient les instructions du programme.

**Exemple de code C minimal :**
```c
#include <stdio.h> // Inclusion de la bibliothèque standard pour les E/S

int main() {
    // Affiche "Hello, World!" à l'écran
    printf("Hello, World!\n");
    return 0; // Fin du programme avec un code de retour 0
}
```