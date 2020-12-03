# Photopedia

<br/>

## Description
**Final Project Assignment for "Telerik Academy Alpha" with JavaScript:** </br>
Design and implement a single-page web application that will allow photo lovers to take part in photo contests. There are two types of users: Photo Junkies and Organizers. Each role has a different view depending on the contest phase. Both of roles are able to explore all Open contests in Phase I. In Phase II Organizers can leave a review but Photo Junkies can not upload photos. All past conests are in Phase III.

### Photo Junkies
- Authenticate users - register/login
- Photo Junkies can explore all the Open Contests (phase 1)
- Photo Junkies can upload just one photo per contest 
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

7. Run **redis-cli.exe** and test if the server is working by writing **PING**. You should get back as a message **PONG**.

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
### Endpoints
For your convenience, we provide a brief description of the endpoints and some previews
### _For Contests_
**GET '/contests/'** = Will retrieve all open contests information

**GET '/contests/phase/2'** = Will retrieve all contests information in phase 2

**GET '/contests/phase/3'** = Will retrieve all contests information in phase 3

**GET '/contests/:id'** = Will retrieve contest information found by unique contest number (id)

**GET '/contests/:id/results'** = Will retrieve all results found by contest unique number

**GET '/contests/first-phase-exp'** = Will retrieve all contests which will be set to Phase 2 soon

**GET '/contests/photos'** = Will retrieve all contests top rated photos

**PUT '/contests/:id'** = Will set contest to the next phase

**POST '/contests/'** = Will create a new contest
Request Body 
```js
{
    "title": string,
    "category": string,
    "firstPhaseLimit": number,
    "secondPhaseLimit": number,
    "restrictions": string,
    "spots": number,
    "filename": string, 
}
```

**POST '/contests/:id'** = Will upload a new photo 
Request Body 
```js
{
    "title": string,
    "description": string,
    "filename": string, 
}
```

**POST '/contests/:id/entries/:id/rate'** = Will create a new review
Request Body 
```js
{
    "score": number,
    "comment": string,
    "isInappropriate": boolean, 
}
```
### _For Users_
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

### Client

10. Navigate to the `client` folder. Open the terminal and run the following commands:

 
    `npm install`

    `npm run start`
  
11. Please, note that there are several pre-created users who are currently participating in most of the contests: 
 - To test all the features that each **participant(Photo Junkie)** can access, log in with the following credentials:

     _username_: `john_wick33`

     _password_: `ASDF123!`

     _`create a new user account` to test the feature **Upload a photo per contest**_

 - To test all the features that each **Orginizer** can access, log in with the following credentials:

     _username_: `david_org`

     _password_: `ASDF123!`  


### Built With

 - [React JS](https://reactjs.org/) 
 - [Express.js](https://expressjs.com/)
 - [MariaDB](https://mariadb.org/)
 - [Socket.io](https://socket.io/)
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
- Niki Minev  -  `nminev95@gmail.com`

---
### Printscreens

- Landingpage
  
![Landing page](/printscreens/landingpage_part1.png)
![Landing page](/printscreens/landingpage_part2.png)

</br>

- Sign in
  
![Sign in](/printscreens/sign_in.png)

</br>

- Sign up
  
![Register](/printscreens/register.png)

</br>

- Homepage Photo Junkie
  
![Homepage](/printscreens/homepage_photo_junkie.png)

</br>

- Homepage Organizer
  
![Homepage](/printscreens/homepage_organizer.png)

</br>

- Create Contest - Organizer
  
![Create contest](/printscreens/create_contest1.png)

![Create contest](/printscreens/create_contest2.png)

</br>

- Open Contests - Photo Junkie View
  
![Open Contests](/printscreens/open_contests.png)
![Open Contests](/printscreens/open_contests_part2.png)

</br>

- Phase I Single Contest preview - Photo Junkie 
  
![Single Contest](/printscreens/single_contest_phase_1_pj_view.png)

</br>

- Phase I Single Contest preview entry form

![Single Contest entry form](/printscreens/photo_entry_form.png)

</br>

- Photo Junkie entries

![Current Contests](/printscreens/photo_junkie_entries.png) 

</br>

- Photo Junkie profile

![Current Contests](/printscreens/profilepage_basic_info.png)

</br>

- User notifications

![Current Contests](/printscreens/live_notifications.png)

</br>

- User - currently no unread notifications

![Current Contests](/printscreens/no_notifications.png)

</br>

- Phase Ii Single Contest preview - Organizer 

![Single Contest](/printscreens/single_contest_phase_2_organizer_view.png)

</br>

- Phase Ii Single Contest entry preview - Organizer 

![Single Contest entry preview](/printscreens/single_photo_priview.png)

</br>

- Phase Ii Single Contest entry review form - Organizer 

![Single Contest entry preview](/printscreens/rate_photo_form.png)

</br>

- Phase III Past Contests  - Photo Junkie

![Past contests](/printscreens/profilepage_past_contests.png)

</br>

- Phase III Past Contests  - Organizer

![Past contests](/printscreens/photo_junkie_past_contest_preview.png)

</br>

- Phase III Past Contests Results

![Past contests results](/printscreens/single_photo_preview_results.png)
![Past contests results](/printscreens/single_photo_preview_results_reviews.png)

</br>

