# Bases du Langage C++

## Commentaires

Les commentaires en C++ permettent d'ajouter des annotations et des explications dans le code. Voici les types de commentaires disponibles :

- **Commentaires sur une seule ligne** : Commencent par deux barres obliques (`//`).
- **Commentaires sur plusieurs lignes** : Commencent par `/*` et se terminent par `*/`.

### Exemples

```cpp
// Commentaire sur une seule ligne

/*
   Commentaire sur plusieurs lignes
   Vous pouvez ajouter plusieurs lignes de texte ici.
*/
```

## Code Général en C++

Voici un exemple de structure de base pour un programme en C++ :

```cpp
#include <iostream> // Inclusion de la bibliothèque d'entrée/sortie

// Fonction principale
int main() {
    std::cout << "Bonjour, le monde!" << std::endl; // Affichage d'un message
    return 0; // Retourne 0 pour indiquer que le programme s'est terminé avec succès
}
```

### Explications

- `#include <iostream>` : Inclut la bibliothèque d'entrée/sortie standard.
- `int main()` : La fonction principale où l'exécution du programme commence.
- `std::cout << "Bonjour, le monde!" << std::endl;` : Affiche le texte à l'écran suivi d'un retour à la ligne.
- `return 0;` : Retourne 0 pour indiquer que le programme s'est terminé correctement.
