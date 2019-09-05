# RecipeTracker

## Project Overview: Express Server Routing, API Manipulation, MySQL Database Get And Posts, And Dynamic HTML Creation Using Express Handlebars

This app allows the user to create and store the names of recipes that they have tried, or would like to try out at some point in the future. Users can then check off recipes they have tried, moving them to a different part of the tracker. If desired, the user may delete the recipe name entirely- removing it from the database.

## Instructions for Operation

Clone the repository, initialize package.json and install the required npm dependencies (express, express-handlebars, mysql). You will also have to have a local MySQL server running on your machine. Ensure that the contents of connection.js match your local connection parameters. Then, in the console run: 

node server.js

The website will then be deployed at http://localhost:8080

This project will also be deployed on Heroku, a link to which can be found in the links subheading of this readme.

## Project Organization

This project contains a file structure meant to meaningfully divide the MVC components into unique directories.

### Config Directory

The config directory contains the code to initialize our connection to the MySQL database. It also contains an object relation mapping file to assit us in querying data to and from our database.

### Controllers Directory

The controllers directory contains code to initialize our routing gets and posts to our API.

### DB Directory

The db directory gives us some code to drop into MySQL Workbench to initialize a database locally, along with some seeds to get started for demonstration purposes.

### Models Directory

The models directory contains our recipe models, to interact with our ORM file located in the config directory in creating our recipe objects.

## Public Directory

This directory contains our CSS, background image, and user click events listeners to interact with the API.

## Views Directory

The views directory contains our handlebars files, allowing us to assemble our HTML dynamically with user input.

## Server File

The server file residing outside all other directories contains the information required to initialize our server locally, as well as lets our app know to use our defined routes and use handlebars to create our viewport on startup.

## Technologies Implemented

This project uses:
* CSS
* Javascript
* jQuery
* MySQL
* Node.js
* npm dependencies
    * express
    * express-handlebars
    * mysql

## Links

Github Repository: https://github.com/bryce-senninger/RecipeTracker

Heroku Deployed App: https://.herokuapp.com
