![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Express Weather App

## Objectives
* Build an Express web app that includes a GET request to get the location of our user, and then display that data.
* Use a new NPM package, [Weather-JS](https://www.npmjs.com/package/weather-js).
* Use best practices when writing code and in organizing your routes. 

## Getting Started

* Fork and clone this repository.
* Make "entry point" for your app (`touch app.js`). 
* Run `npm init` to setup our folder. 
* Install your dependencies (Express, EJS, [Weather-JS](https://www.npmjs.com/package/weather-js)). 
* Create a .gitignore file
* Start writing out Express app in `app.js`.

## Requirements/App Map

* App should include the following routes/views:
  - `/`: homepage that includes some instructions for the user, and a form that includes a text input and a submit button. The text input should query for a zipcode, and the form should then—as a get method—send the zipcode to your backend for use. This route should take both GET methods. 
  - `/weather`: a GET route that returns the weather data for whichever zipcode the user passes to route, you will need to access the zipcode from the form; this is a results page that displays the weather in the location given by the user. Display whichever data points from your `Weather-JS` call that you find relevant/interesting. 

## Bonuses
* Write an if statement that passes one template if the weather is "nice" outside, and another if it is not. 
* Write a function that queries a random zipcode for the weather, and returns the `/weather/:zipcode` route with the result. 
* Use a template
* Try to style

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
