# Photopedia

<br/>

## Description
Final Project Assignment for "Telerik Academy Alpha" with JavaScript: 
Design and implement a single-page web application that will allow photo lovers to take part in photo contests. There are two types of users: Photo Junkies and Organizers. Each role has a different view depending on the contest phase. 

### Photo Junkies
- Authenticate users - register/login
- Photo Junkies can explore all the Open Contests (phase 1)
- Photo Junkies can upload just one phoro per contest 
- Photo Junkies are able to check all the contests they are currently participating in
- They are able to check all their past contests
- In their Profile page they can check their scores and rank
### Organizers
- Authenticate users - register/login
- Organizers can view all the contests in Phase 1
- Organizers can view all the contests in Phase 2
- Organizers can view all the contests in Phase 3
- Organizers can Create a new Contest\
- Organizers can Review all the submitted photos per contests if The Contest is in Phase 2
- They can check the Users Ranking 
- If the contest is in Phase 3, they can not leave any reviews.
<br/>

---

##  Project Requirements

<br/>

### Server

1. To run our project locally, clone this repository.

    Run `npm install` in the main folder directory.

    Please use latest version of `node`.

    To run the application locally and visit `[localhost:4000]` to explore.


2. Setup MySQL Database with new Schema.

3. Import in a new SQL Query Tab all of the contents of `populate-initial-data.sql`.

4. Open the following [link](https://riptutorial.com/redis/example/29962/installing-and-running-redis-server-on-windows) and download **Redis-x64-3.2.100.zip**

5. Extract all the files.

6. Run **redis-server.exe**

7. Run **redis-cli.exe**
8. Setup `config.js` file. It needs to be on root level in api folder where is `package.json` and other config files.

   - `config.json` file with your settings:

   ``` sh
    {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'your-password-goes-here',
      database: 'photo_contest_db',
     };
    ```

9. After files are setup, open the terminal and run the following command:

    `npm run start:dev`
  
---

### Client

10. Navigate to the `client` folder. Open the terminal and run the following commands:

 
    `npm install`

    `npm run start`
  
11. Please, note that there are several pre-created users. 
 - To test all the features that each **participant(Photo Junkie)** can access, log in with the following credentials:

     _username_: `john_33`

     _password_: `ASDF123!`

 - To test all the features that each **Orginizer** can access, log in with the following credentials:

     _username_: `david_org`

     _password_: `ASDF123!`  

12. For your convenience, we provide a brief description of the endpoints and some previews
#### For Contests
- All contests in Phase I (Open contests)
- Photo Junkie contest entry endpoint
- All Photo Junkie current contests
- All Photo Junkie past contests
- Users ranking

#### For Users
**GET '/users/:id/profile'** = Will retrieve user information

**GET '/users/experts'** = Will retrieve all high level users information

**GET '/users//contests'** = Will retrieve all user current contests information

**GET '/users/past-contests'** = Will retrieve all user past contests information

**GET '/users/rankings'** = Will retrieve all users ordered by their Ranking

**PUT '/users/notifications'** = Will confirm if an user confirms the invitation

**POST '/auth/register'** = Will register a new user

Request Body 
```js
{
    "username": string,
    "password": string,
    "passwordConfirm": string,
    "firstName": string,
    "lastName": string,
    "email": string,
}
```

**POST '/auth/login'** = Will login an existing user

Request Body 
```js
{
    "username": string,
    "password": string,
}
```

**DELETE '/auth/logout'** = Will logout an existing user


---

### Built With

 - [React JS](https://reactjs.org/) 
 - [Express.js](https://expressjs.com/)
 - [MariaDB](https://mariadb.org/)
 - [Redux](https://redux.js.org/) 
 - [Redis](https://redis.io/)
 - [Material-UI](https://material-ui.com/) 
 - [JWT](https://jwt.io/)

---

### What helped in our research and coding:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/introduction/getting-started)
- [Express.js Documentation](https://expressjs.com/)
- StackOverflow, Medium, etc.

---

### Special thanks goes to: 

Our devoted trainers - _Edward Evlogiev_ and _Rosen Urkov_
and our mentor - _Martin Nedyalkov_

*We put a lot of work, passion and emotions in it!* 

---

### Authors and Contributors

- Mariya Velikova -  `m.velikovaa@gmail.com`
- Niki Minev  -  `n.minev42@gmail.com`