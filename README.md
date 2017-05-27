# mern
## Ce projet
Ceci ne sera pas un tutorial, mais sera une sorte de journal de bord de ce que j'ai développé, des choix que j'ai fait et pourquoi je les ai fait. Il y aura surement de nombreuses erreurs et retour en arrière. Je devrais conserver un état final qui permet de voir l'état final et si vous suivez le journal à la lettre, je vous conseille de garder un oeil dessus.
## Pourquoi
J'ai tenté de trouver des boilerplate de mern un peu partout sur la toile, mais à chaque fois le résultat ne me plaisit pas. Soit le système développé était trop spécifique, soit il était trop compliqué, soit la structure semblait peu judicieuse. Je souhaite aussi me questionner et essayer de comprendre les étapes de dévelopement et de configuration d'un projet node.
## Ce Readme
Vous trouverez une première section ou je décris l'état actuel, suite aux choix qui ont été fait. Ensuite une autre partie qui sera plus un journal de bord pour suivre les étapes
## Le but 
Le but est d'avoir un stack mern (mongo express react node) cohérent avec un système d'authentification qui fonctionne.
# Etat actuel
## Express
Ce sera le core de notre backend pour traiter les requêtes
## NPM
Le package manager de node est le système que je vais utiliser par défaut. Pour installer une nouvelle dépendance, il suffit de faire npm install \<nom du package\>. Utiliser --save pour toute dépendance qu'on veut ajouter au moment du runtime, --save-dev pour toute dépendance qui n'est pas nécessaire pour le runtime.
# Journal
## 27.06.2017
- Reprise de express pour lancer le serveur, avec un hello world à la con.
- Recherche d'utilisation d'ES6. C'est là que commence la m... :D Je peux simplerment installer babel et utiliser babel-node pour lancer le serveur, ou je peux utiliser un "task runner" qui permettra de transformer le code es6 (toujours en utilisant babel) vers du code que le serveur peut comprendre
- Je pense que je vais essayer la structure de l'application suivante 
  * src
    * server
    * client
  * dist
    * server.bundle.js  // code compilé de ce qui est dans server
    * public            // contient le code complié qui est dans la partie client avec les images
      * images
      * app.bundle.js
      * vendor.bundle.js
  * webpack-config.js
  * package.json
- Bon une chose à la fois, installons webpack : npm install --save-dev webpack. Dans un premier temps, je vais tenter de simplement copier le fichier server.js depuis le dossier src/server jusqu'au dossier dist.
- C'est pas trop compliqué, j'ai juste du trouver un moyen de ne pas intégrer express dans le build (j'ai utilisé exclude dans la config webpack).
## 25.06.2017
- Création du projet (npm init)
- Création du projet git sur github (git init et git remote add origin https://github.com/Lifwill/mern.git )
- Début de la tentative de créer un simple projet express (npm install express --save). J'ai choisi d'utiliser express parce que c'est le système qui s'est imposé pour le dévelopement de service web avec node.
- Nouveau dossier créé node_modules de machin qu'on veut pas sur le git (dépendance, etc..), création d'un .gitignore, un simple fichier texte qui exclut node_modules
## initial
- Je travaille avec une vm (vmware) avec ubuntu installé. J'ai déjà node installé en utilisant nvm. J'utilise l'éditeur atom que je suis par ailleurs en train d'apprendre à utiliser.
