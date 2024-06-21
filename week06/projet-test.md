# Notes API Documentation

[Lien API](https://practice.expandtesting.com/notes/api/swagger.json)

## Routes | US | Critéres d'acceptation (Lists):

### Health :

- GET `/health-check`
- US : `En tant qu'admin`, je veux pouvoir tester le fonctionnement de l'API `afin` de réaliser des tests.
- Critères d'acceptation :
  - Le statut de la réponse est 200.
  - Le corps de la réponse contient les propriétés success, status et message.
  - Si la route est invalide, la réponse a un statut 404.
  - L'API doit retourner un statut 500 si elle est en panne.
  - La réponse de la requête doit être au format JSON.

### USER :

#### POST `/users/register`

- US : `En tant qu'utilisateur`, je veux pouvoir m'inscrire sur la plateforme `afin` de créer un compte.
- Critères d'acceptation :
  - Le statut de la réponse est 201 en cas de succès.
  - Le corps de la réponse contient les propriétés success, status, message et userId.
  - Si les informations sont invalides ou manquantes, la réponse a un statut 400 avec un message d'erreur approprié.
  - La réponse de la requête doit être au format JSON.

#### POST `/users/login`

- US : `En tant qu'utilisateur`, je veux pouvoir me connecter à la plateforme `afin` d'accéder à mon compte.
- Critères d'acceptation :
  - Le statut de la réponse est 200 en cas de succès.
  - Le corps de la réponse contient les propriétés success, status, message et token.
  - Si les informations d'identification sont incorrectes, la réponse a un statut 401 avec un message d'erreur approprié.
  - La réponse de la requête doit être au format JSON.

#### GET `/users/profile`

- US : En tant qu'utilisateur, je veux pouvoir consulter mon profil afin de vérifier mes informations personnelles.
- Critères d'acceptation :
  - Le statut de la réponse est 200 en cas de succès.
  - Le corps de la réponse contient les propriétés success, status, message et profile.
  - Si l'utilisateur n'est pas authentifié, la réponse a un statut 401 avec un message d'erreur approprié.
  - La réponse de la requête doit être au format JSON.

## Routes | US | Critéres d'acceptation (syntaxe Gherkin):

### Feature: Vérification de l'état de santé de l'API - GET `/health-check`

En tant qu'administrateur,
je veux vérifier l'état de santé de l'API
afin de m'assurer que l'API fonctionne correctement.

#### Scenario: Vérifier l'état de santé lorsque l'API est en ligne et fonctionne correctement

- **Given** que l'API est en ligne et fonctionne correctement
- **When** un administrateur envoie une requête GET à "/health-check"
- **Then** le statut de la réponse est 200
- **And** le corps de la réponse contient les propriétés "success", "status" et "message"

#### Scenario: Vérifier l'état de santé lorsque l'API est en ligne mais présente une erreur interne

- **Given** que l'API est en ligne mais présente une erreur interne
- **When** un administrateur envoie une requête GET à "/health-check"
- **Then** le statut de la réponse est 500
- **And** le corps de la réponse contient les propriétés "success", "status" et "message"

#### Scenario: Vérifier l'état de santé lorsque l'API est hors ligne ou inaccessible

- **Given** que l'API est hors ligne ou inaccessible
- **When** un administrateur envoie une requête GET à "/health-check"
- **Then** le statut de la réponse est 404
- **And** la réponse contient un message d'erreur approprié indiquant que l'API est indisponible

### Feature: Inscription des utilisateurs - POST `/users/register`

En tant qu'utilisateur,
je veux pouvoir m'inscrire sur la plateforme
afin de créer un compte utilisateur.

#### Scenario: Inscription réussie avec des informations valides

- **Given** des informations d'inscription valides
- **When** un utilisateur envoie une requête POST à "/users/register"
- **Then** le statut de la réponse est 201
- **And** le corps de la réponse contient les propriétés "success", "status", "message" et "userId"

#### Scenario: Erreur lors de l'inscription avec des informations manquantes ou invalides

- **Given** des informations d'inscription invalides ou manquantes
- **When** un utilisateur envoie une requête POST à "/users/register"
- **Then** le statut de la réponse est 400
- **And** la réponse contient un message d'erreur approprié

#### Scenario: Erreur lors de l'inscription due à un conflit (utilisateur déjà existant)

- **Given** des informations d'inscription valides mais un utilisateur avec le même email existe déjà
- **When** un utilisateur envoie une requête POST à "/users/register"
- **Then** le statut de la réponse est 409
- **And** la réponse contient un message d'erreur indiquant le conflit

#### Scenario: Erreur interne du serveur lors de l'inscription

- **Given** des informations d'inscription valides
- **When** un utilisateur envoie une requête POST à "/users/register"
- **Then** le statut de la réponse est 500
- **And** la réponse contient un message d'erreur indiquant une erreur interne du serveur

### Feature: Connexion des utilisateurs - POST `/users/login`

En tant qu'utilisateur,
je veux pouvoir me connecter à la plateforme
afin d'accéder à mon compte.

#### Scenario: Connexion réussie avec des informations valides

- **Given** des informations d'identification valides
- **When** un utilisateur envoie une requête POST à "/users/login"
- **Then** le statut de la réponse est 200
- **And** le corps de la réponse contient les propriétés "success", "status", "message" et "token"

#### Scenario: Erreur lors de la connexion avec des informations invalides

- **Given** des informations d'identification invalides
- **When** un utilisateur envoie une requête POST à "/users/login"
- **Then** le statut de la réponse est 401
- **And** la réponse contient un message d'erreur approprié

#### Scenario: Erreur interne du serveur lors de la connexion

- **Given** des informations d'identification valides
- **When** un utilisateur envoie une requête POST à "/users/login"
- **Then** le statut de la réponse est 500
- **And** la réponse contient un message d'erreur indiquant une erreur interne du serveur

### Feature: Consultation du profil utilisateur - GET `/users/profile`

En tant qu'utilisateur,
je veux pouvoir consulter mon profil
afin de vérifier mes informations personnelles.

#### Scenario: Consultation réussie du profil pour un utilisateur authentifié

- **Given** un utilisateur authentifié
- **When** l'utilisateur envoie une requête GET à "/users/profile"
- **Then** le statut de la réponse est 200
- **And** le corps de la réponse contient les propriétés "success", "status", "message" et "profile"

#### Scenario: Erreur de consultation du profil pour un utilisateur non authentifié

- **Given** un utilisateur non authentifié
- **When** l'utilisateur envoie une requête GET à "/users/profile"
- **Then** le statut de la réponse est 401
- **And** la réponse contient un message d'erreur approprié

#### Scenario: Erreur interne du serveur lors de la consultation du profil

- **Given** un utilisateur authentifié
- **When** l'utilisateur envoie une requête GET à "/users/profile"
- **Then** le statut de la réponse est 500
- **And** la réponse contient un message d'erreur indiquant une erreur interne du serveur
