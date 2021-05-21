<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_squid_banner_2.png?raw=true"
     alt="Banner_Logo"
     width=90%;/>

# Inkedin
## Empowering Artists

Inkedin is a React + Express app where artists can share art, communicate, and find or post jobs. It has a built in job board, messenger, and search filter. Build a portfolio and show off the results of your efforts!

## Screenshots

<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_home.png?raw=true"
     alt="Inkedin_Home"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_user_portfolio.png?raw=true"
     alt="Inkedin_User_Portfolio"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_messenger.png?raw=true"
     alt="Inkedin_Messenger"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_job_board.png?raw=true"
     alt="Inkedin_Job_Board"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_search_results.png?raw=true"
     alt="Inkedin_Search_Results"
     width=45%;/>
<img src="https://github.com/AdamHHart/inkedin_empower_artists/blob/master/react-front-end/public/docs/Inkedin_my_portfolio.png?raw=true"
     alt="Inkedin_My_Portfolio"
     width=45%;/>

## Setup
To get a local copy of Inkedin up and running, follow these steps:

Clone the repo
``` git clone <https://github.com/your_username_/Project-Name.git> <filename> ```

Install dependencies
``` npm install ```

setup PostgreSQL Database
``` psql ```
``` CREATE DATABASE inkedin_app ```
exit PSQL with ctrl-q

Seed the Database
``` npm run db:reset ```

Run App Locally!
```npm start ```


## Dependencies 
* ReactJS
* Express
* NodeJS
* PostgreSQL
* MaterialUI
* CSS


## Contact

* Adam Hart - @AdamHHart
* James Biesenthal - @SeriusLL
* Sunny Nguyen-Bui - @snguyenbui 

Please contact us for any issues, funding, or job offers.














# React + Express No-Fluff Boilerplate

A boilerplate project for anyone interested in making a project that uses React and Express.

This repository is a bootleg of @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). It uses the same React app, but replaces the Rails server with an Express server.

Note! This boilerplate has _no fluff_! That means that there's nothing set up for you to do authentication stuff, there's no Redux stuff, and there's no React Router stuff. On the Express end, there is no session storage or database connection.

The main important bit is that the React project has `proxy` set to `localhost:8080` in the `package.json` file, and that the Express app listens to port 8080 in `server.js`. Take a look!

You can (and perhaps should) rename the directories `express-back-end` and `react-front-end` if you want-- The name doesn't matter.

## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

In the browser, you can click on the button and see the data get loaded.

If this doesn't work, please message me!

## Next steps

From here, you can start working on your project!

As soon as the dependencies are installed, your Express server can serve JSON and static assets (like images) in response to API calls from the React app. You can get started on developing your React app, routing plan, etc. right away! Any request that isn't handled by React is passed on to the Express server. That means that you can call a route like `/api/users` from React using `fetch`, `axios`, or something else, and Express will receive it as though they originated from the same app. For routing, best practice is to namespace all of your data routes to `/api`, so that they don't clash with other routing schemes, like React Router.

At some point, you'll likely want to install and configure a database driver for Postgres or MongoDB-- Refer to past projects for hints on how to do this.

And don't forget to update the README!

## Example Projects

You might want to look at examples of projects that have used this boilerplate for hints on how to extend it. Here are a few:

* [Later Cart](https://github.com/bonitac/later-cart)
* [Buddi.io](https://github.com/Danny-Tran/buddi.io)

If you'd like your project added to the list, please shoot me a message.

## Contact

Please contact me on Slack (@garrettgsb) or Nima at `nima@lighthouselabs.com` if you have any questions, requests, or feedback, or post an issue to this repo. If you are using the boilerplate, I'd love to hear from you as well!
