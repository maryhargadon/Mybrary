# Mybrary

## General Info

This is currently a project in progress for my front-end web development course through Launchcode. This MEAN stack app is meant to provide a means for users to list and lend their own books, music albums, or other items to other users. Currently a user can register and login to a demo account that has a list of books and music albums that are stored using MongoDB. In the future I plan to have each user's account data stored separately using an index. I also plan to create a page where users can view each other's lists of lending items as well as a messaging system to establish lending logistics and terms. 

## Technologies

* Angular version 8.2.14
* Bootstrap version 4.5.0
* Angular Material version 8.2.3
* Angular Universal version 8.2.6
* Express version 4.15.2
* Mongoose version 5.9.19
* Node.js version 12.13.0
* MongoDB Atlas

### Demo Images

Click the link below to view screenshots of the application.

* Demo: ![Mybrary Demo](mybrary_demo.pdf)

## Setup

To run this project:

* clone or download
>cd ../Mybrary
* Install angular cli with npm 
>npm install -g @angular/cli
* Install required npm packages 
>npm install
* Insert MongoDB Atlas connection string in server.ts, or install and run mongodb locally
* Run with:
>npm run build:ssr && npm run serve:ssr
* Navigate to http://localhost:4000/






