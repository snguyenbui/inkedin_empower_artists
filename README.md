<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_squid_banner_2.png?raw=true"
     alt="Banner_Logo"
     width=90%;/>

# Inkedin
## Empowering Artists

###### Inkedin is a React + Express app where artists can share art, communicate, and find or post jobs. It has a built in job board, messenger, and search filter. Build a portfolio and show off the results of your efforts!

## Screenshots

<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_home.png?raw=true"
     alt="Inkedin_Home"
     width=45%;/> <img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_user_portfolio.png?raw=true"
     alt="Inkedin_User_Portfolio"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_messenger.png?raw=true"
     alt="Inkedin_Messenger"
     width=45%;/><img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_job_board.png?raw=true"
     alt="Inkedin_Job_Board"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_search_results.png?raw=true"
     alt="Inkedin_Search_Results"
     width=45%;/><img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_my_portfolio.png?raw=true"
     alt="Inkedin_My_Portfolio"
     width=45%;/>

## Setup
### To get a local copy of Inkedin up and running, follow these steps:

Clone the repo

``` 
git clone https://github.com/snguyenbui/inkedin_empower_artists.git <pathname> 
```

Install dependencies for both React and Express from inside their respective directories

``` 
npm install 
```
- or 
``` 
yarn install 
```
Setup PostgreSQL Database


``` 
psql -U <username> <password>
CREATE DATABASE inkedin_app 
```

Configure a env file to connect a database to the backend - an example is provided as .env.example

``` 
DB_HOST=  LOCALHOST
DB_PORT=  DATABASE_PORT
DB_USER=  DATABASE_USERNAME
DB_PASS=  DATABASE_PASSWORD
DB_NAME=  DATABASE_NAME 
```

Seed the Database in the Express backend

``` 
npm run db:reset
```
- or 
``` 
yarn run db:reset
```

Run Express backend server Locally!

``` 
npm start
```
- or 
``` 
yarn start
```
Run React front end Locally!

``` 
npm start 
```
- or 
``` 
yarn start
```

## Dependencies 
* ReactJS
* Express
* NodeJS
* PostgreSQL


## Contact
#### Please contact us for any issues, funding, or job offers.


* ##### Adam Hart - @AdamHHart
* ##### James Biesenthal - @SiriusLL
* ##### Sunny Nguyen-Bui - @snguyenbui 
  
