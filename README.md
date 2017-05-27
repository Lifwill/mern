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
## Babel 
permet de traduire du code es6 et jsx directement en javascript
## Eslint
Surveille la qualité du code
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
    * public            // contient le code compilé qui est dans la partie client avec les images
      * images
      * app.bundle.js
      * vendor.bundle.js
  * webpack-config.js
  * package.json
- Bon une chose à la fois, installons webpack : npm install --save-dev webpack. Dans un premier temps, je vais tenter de simplement copier le fichier server.js depuis le dossier src/server jusqu'au dossier dist.
- C'est pas trop compliqué, j'ai juste du trouver un moyen de ne pas intégrer express dans le build (j'ai utilisé exclude dans la config webpack).
- Bon au tour de babel, pour le coup, je ne m'ennuie pas trop, je vais direct sur le site de babel https://babeljs.io/docs/setup/#installation.
- Pourquoi ça ne marche jamais du premier coup ? :D Le exclude ne fonctionnait pas, il semble qu'il faut ajouter un bable-external machin (webpack-node-externals), et maintenant ça marche :).
- J'hésite entre commencer à faire le front-end (react etc.. ) ou plutôt à passer directement à l'authentification. Je pense que ce serait mieux de me mettre directement à React.... en fait non je vais commencer par eslint :). Il est très important d'avoir du code correctement écrit. Donc let's go.
- Après mûre réflexion, plutôt que de me prendre la tête avec des règles que je devrais réfléchir, autant reprendre comme base ce qui a été fait par d'autres. Donc j'ai regardé le eslint de https://github.com/vasansr/pro-mern-stack. Il me semble suffisant pour commencer.
- Il m'a fallu un moment pour me rendre compte que ne sera pris en compte eslint dans atom que en le relancant... comment perdre du temps pour rien. Pour finir j'ai simplement installé eslint globalement, lancé eslint --init, répondu aux questions et adapté un poil.
- Bon c'est le moment de se mettre à react, je pense que ça va me prendre un moment si je fais from scratch.
- Commençons par l'installer, ça peut aider :). Plus sérieusement, je suis les infos sur la page officieille de react, ce qui est à mon avis la meilleure façon de commencer.
- Alors, j'ai perdu pas mal de temps à trouver (ou faire marcher c'est selon) le parser de babel, il semble que le babelrc ne soit pas correctement pris en compte. Il faudra que je clean cette partie. De plus pour arriver à setter une route public avec express, je ne sais pas pourquoi, mais il semble qu'en utilisant la librairie path, j'ai un peu merdouillé. Bref, tout est bien qui finit bien .. ou presque. Je dois rajouter dans mon build pipeline la suppression de fichiers (supprimer le répertoire dist) et je pense que ce sera déjà pas mal pour aujourd'hui.
- Je ne résiste pas, on en est à ERN ... il manque un M ... mongo. C'est vrai que je parlais d'authentification, mais de toute façon il me faut une base de donnée pour stoquer les utilisateurs. Je pense que ce serait bien de commencer par là.
  * Mongoose
  * Un model d'utilisateur
  * un controlleur qui permet de lister, créer, supprimer, etc.. les utilisateurs
  * Les vues react correspondantes.
  Enfin je vais commencer disons :)
## 25.06.2017
- Création du projet (npm init)
- Création du projet git sur github (git init et git remote add origin https://github.com/Lifwill/mern.git )
- Début de la tentative de créer un simple projet express (npm install express --save). J'ai choisi d'utiliser express parce que c'est le système qui s'est imposé pour le dévelopement de service web avec node.
- Nouveau dossier créé node_modules de machin qu'on veut pas sur le git (dépendance, etc..), création d'un .gitignore, un simple fichier texte qui exclut node_modules 
## initial
- Je travaille avec une vm (vmware) avec ubuntu installé. J'ai déjà node installé en utilisant nvm. J'utilise l'éditeur atom que je suis par ailleurs en train d'apprendre à utiliser.
