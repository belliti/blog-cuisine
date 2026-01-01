# Blog de Cuisine

Ce projet est un blog de recettes de cuisine développé en **React.js** pour le frontend et **Node.js/Express** avec **MongoDB Atlas** pour le backend.  

---

## Compte de test

Pour accéder au site :  

- **Email** : `test1@test.com`  
- **Mot de passe** : `123456`  

---

## URLs en ligne

- **Frontend (Netlify)** : [https://keen-pony-334d9d.netlify.app](https://keen-pony-334d9d.netlify.app)  
- **Backend (Render)** : `https://backend-blog-cuisine.onrender.com`  

---

## Authentification

1. L’utilisateur saisit email et mot de passe sur la page login.  
2. Une requête POST est envoyée au backend :

POST /api/auth/login URL : https://backend-blog-cuisine.onrender.com/api/auth/login Payload : { "email": "test1@test.com", "password": "123456" }

3. Le backend renvoie une réponse JSON contenant un `token`.  
4. Le token est stocké dans le localStorage.  
5. L’utilisateur est redirigé vers la page protégée (dashboard ).  

---

## lancement du frontend

```bash
cd frontend
npm install
npm start
```


## lancement du Backend
```bash
cd backend
npm install
node index.js
```
Projet réalisé en octobre 2025 par Itshak Belliti

