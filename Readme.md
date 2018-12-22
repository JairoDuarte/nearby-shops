# Coding Challenge
> The coding challenge is about implementing an app that lists shops nearby, help users to find shops that are near their location **HTML5 Geolocation**. and they can dislike or like shop to add on preferred list and remove them from preferred.

Technical spec
---------------
Application is split between a **back-end** and a **web front-end**.

The **front-end** is a single page app with a single index.html, building with **VueJS**. 

The **back-end** is a **REST API** building with **NodeJS**,  **adonisJS web framework** and **MongoDB**.,

Getting Started
---------------
> Development

To run the app on localhost, just clone the project and run ```npm install``` in backend and frontend folder. After that you can run the backend API by running the command ```npm start ``` and launch frontend server using ``` npm start``` again. Now you can access App by typing htpp://localhost:8080 in your browser.

You can run the api test, just config .env.testing file for your environment 

> Production

To run the app on localhost like production environment, just clone the project and run ``` npm install ``` for backend and frontend folder. After in frontend folder run ```npm  run build ``` and backend run npm start.

``` Backend ```

The main logic of app is based in [adonisjs](https://adonisjs.com/). The database ORM is [Lucid Mongo](https://github.com/duyluonglc/lucid-mongo). The code is written in JavaScript.

* [/app]()
    * [/Controllers](./backend/app/Controllers/)
        * [AuthentificationController.js](./backend/app/Controllers/Http/AuthentificationController.js)
         * [UserController.js](./backend/app/Controllers/Http/UserController.js)
         * [ShopController.js](./backend/app/Controllers/Http/ShopController.js)
    * [/Models](./backend/app/Models)
        * [/Hooks/User.js](./backend/app/Models/Hooks/User.js)
        * [/Models](./backend/app/Models)
    * [/Routes](./back-end/src/config/database.config.ts)
    * [/Validators](./back-end/src/config/database.config.ts)
* [/models]()
    * [/Shop.ts](./back-end/src/models/Shop.ts)
    * [/User.ts](./back-end/src/models/User.ts)
* [/routes]()
    * [authentication.ts](./back-end/src/routes/authentication.ts)
    * [shops.ts](./back-end/src/routes/shops.ts)
* [/app.ts](./back-end/src/app.ts)
* [/server.ts](./back-end/src/server.ts)

Architecture
---------------

The backend API also use Google Maps api to search and sorted shops nearby by distance the connect user.

## License
[MIT License](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/LICENSE.md) ©  [Jairo Duarte](https://github.com/jairoduarte)
