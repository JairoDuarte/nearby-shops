# Coding Challenge
> The coding challenge is about implementing an app that lists shops nearby, help users to find shops that are near their location **HTML5 Geolocation**. and they can dislike or like shop to add on preferred list and remove them from preferred.


#### For the testing purpose, you can use the following user:

>email: **alfredojairo17@gmail.com** 
password: **alfredojairo17@gmail.com**

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

Architecture
---------------

The backend API also use Google Maps api to search and sorted shops nearby by distance the connect user.

``` Backend ```

The main logic of app is based in [adonisjs](https://adonisjs.com/). The database ORM is [Lucid Mongo](https://github.com/duyluonglc/lucid-mongo). The code is written in JavaScript.

#### Resource components

| resources | method | description |
| --------- |--------| ----------- |
| ```/api/users/signup``` | POST | create a new user passing name, email and password in the body. |
| ```/api/users/signin``` | POST | login by passing email and password in the body.|
| ```/api/users/me``` | GET | returns all information about user. |
| ```/api/users/likeshops``` | GET | returns a list of the preferred shops of the current user. |
| ```/api/users/dislikeshops``` | GET | returns a list of the disliked shops of the current user. |
| ```/api/users/addliked``` | POST | add a specific shop into the preferred shops list of current user. |
| ```/api/shops/adddislike/``` | POST | add a specific shop into the disliked shops list of current user. |
| ```/api/users/removeshop/{shopId}/``` | DELETE | remove a shop from preferred shops. |
| ```/api/shops/{latitude}/{longitude}``` | GET | returns a list of shops sorted by the distance user curent location. |


``` frontend ```

for the frontend App has the global Architecture of an vue-cli project.


![Near by shops](https://raw.githack.com/JairoDuarte/nearby-shops/master/img3.png "Near by shops")



![Near by shops](https://raw.githack.com/JairoDuarte/nearby-shops/master/img1.png "Near by shops")


![Preferred shops](https://raw.githack.com/JairoDuarte/nearby-shops/master/img2.png "Near by shops")

## License
[MIT License](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/LICENSE.md) ©  [Jairo Duarte](https://github.com/jairoduarte)
