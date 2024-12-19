# OUKHEMANOU Mohand-Tahar
# Mastère DATA & IA
# TP MERN
# [PRS] MIA 26.2

Projet Annonces - Utilisateurs
Par OUKHEMANOU Mohand

## Informations

Ce projet permet à des utilisateurs de gérer des annonces (CRUD : Créer, Lire, Mettre à jour, Supprimer). Il comprend un backend avec Node.js et Express pour gérer les données, et un frontend avec React pour l'interface utilisateur. 

## Utilisation

### Backend (Node.js / Express)
1) Clonez le dépôt du projet :
    - git clone https://github.com/votre-utilisateur/votre-projet.git
    - cd votre-projet

2) Allez dans le dossier du backend et installez les dépendances :
    - cd back
    - npm install

3) Lancer le serveur backend : 
    - npm start

### Frontend (React)
1) Allez dans le dossier du backend et installez les dépendances :
    - cd front
    - npm install

2) Lancer le serveur frontend : 
    - npm start

## Technologies utilisées
1) Backend :
    - Node.js : Serveur backend JavaScript.
    - Express.js : Framework web pour Node.js.
    - MongoDB : Base de données NoSQL utilisée pour stocker les annonces et les utilisateurs.
    - Mongoose : ODM (Object Data Modeling) pour interagir avec MongoDB.
    - JWT (JSON Web Token) : Système d'authentification sécurisé pour gérer les sessions des utilisateurs.
    - bcrypt : Librairie utilisée pour hacher les mots de passe des utilisateurs.

2) Frontend :
    - React.js : Librairie JavaScript pour construire l'interface utilisateur.
    - React Router : Pour la navigation entre les pages.
    - Axios : Pour effectuer des requêtes HTTP vers l'API backend.

3) Outils de développement :
    - dotenv : Pour charger les variables d'environnement à partir d'un fichier .env.
    - Postman / Insomnia : Outils pour tester les routes API lors du développement.

## Fonctionnalités implémentées
1) Fonctionnalités côté Backend :
    - Authentification des utilisateurs :
        - Inscription : L'utilisateur peut créer un compte avec un email, un nom d'utilisateur et un mot de passe sécurisé (haché avec bcrypt).
        - Connexion : L'utilisateur peut se connecter en fournissant un email et un mot de passe, et un token JWT est généré pour sécuriser l'accès aux routes protégées.
    - Gestion des Annonces (CRUD) :
        - Créer une annonce : L'utilisateur connecté peut créer une annonce. L'ID de l'utilisateur est automatiquement ajouté à l'annonce en tant qu'auteur.
        - Lire les annonces : Les utilisateurs peuvent consulter la liste des annonces, avec possibilité de filtrer par titre.
        - Mettre à jour une annonce : L'utilisateur peut modifier une annonce existante, en fonction des autorisations.
        - Supprimer une annonce : L'utilisateur peut supprimer une annonce existante.

2) Fonctionnalités côté Frontend :
    - Page d'inscription : Permet à un utilisateur de créer un compte avec son email, son nom d'utilisateur et son mot de passe.
    - Page de connexion : Permet à un utilisateur de se connecter avec son email et son mot de passe. Un token JWT est stocké côté client dans localStorage.
    - Page des annonces : Permet à un utilisateur de voir toutes les annonces disponibles. Les annonces peuvent être filtrées par titre.
    - Gestion des annonces (CRUD) : L'utilisateur peut créer, modifier et supprimer ses propres annonces depuis l'interface utilisateur.

3) Sécurisation des routes :
    - L'authentification est gérée avec JWT pour sécuriser l'accès aux pages protégées. Seuls les utilisateurs authentifiés peuvent accéder à certaines pages comme la création, la modification et la suppression d'annonces.

4) Filtrage par Catégorie
    - Une fonctionnalité a été ajoutée pour filtrer les annonces par catégorie. 
    - Les catégories disponibles sont : Immobilier, Véhicules, Électronique, etc.
    - Un menu déroulant est présent sur la page d'accueil permettant à l'utilisateur de sélectionner une catégorie et d'afficher uniquement les annonces correspondantes.

5) Détails d’une annonce
- En cliquant sur "Voir l'annonce" dans la liste des annonces, l'utilisateur est redirigé vers une page détaillant l'annonce.
- La page affiche les informations suivantes : 
  - Titre
  - Description
  - Catégorie
  - Prix
  - Nom de l'utilisateur ayant posté l'annonce.
