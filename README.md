# Traveller

Traveller is a project which developed for the learning purpose, However it is a good project. By using Traveller a person can save data about planned trips and get weather conditions and image of the trip. This project saves the record for the user about their trips.

## Getting Started

Following are the steps to setup the project.

```
Step1 : Clone repository on your local machine.
Step2 : Create an account on GeoNames , Weatherbit and Pixabay and get userid and key.
Step3 : save api id and key in .env file as shown below : 
geoNames_username=<your geonames username>
weatherbit_APIkey=<weatherbit API key>
pixabay_APIkey=<Pixabay API key>
step4 : In root directory (which contains "package.json") run command "npm install"
step5 : run command "npm run build-prod"
step6 : run command "npm start"
step7 : run command "npm start" , A message will be displayed on terminal i.e "App listening on port 8080!"
step8 : Open web browser and type "localhost:8080" And thats It ..

```
## Project Description
Traveller is a web Application which can be used to store/manage user's trip information. It is very easy to use.
First time you have to sign up for using the web application in order to store the user data for managing trips.
After successful creation of Account you can simpy login in to application. After login you can add/delete your trips. for adding trip a red button at bottom right is given. By clicking the button a form will be shown, With two input fields i.e Location and date Respectively. By adding this info just click on save trip button and the trip will be saved to server and updates on UI automatically. Other than user inputted information it will show the weather conditions and number of days remaining. 
Note : Weather condition will be shown if the trip is within 16 days. If the trip is not in 16 days so "NA" will be shown in weather condition.

## How to Use.
1- Sign up : Create an account if you are visiting first time
2- Login : After successful creation of account, Login to application
3- Add Trip : A red button will be shown at the bottom right of the screen.
4- Fill Trip information form : Fill out the form fields i.e Location and Date.
5- Save Trip : After filling the form fields click on the save trip button and within seconds your trip will
be shown on my trips page.
6- Delete Trip : For deleting a trip click on delete button at the bottom of Trip card.
7- Logout : Click on logout button and close the application.

Note : Please enter the date in correct format i.e YYYY-MM-DD,
information of trips will be stored on server for later visit.


## Prerequisites

What things you need to Setup and run the Traveller web Application

#Important

```
Create a file ".babelrc" in project root directory and add the following in file i.e Line 50 to Line 54 :
{
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
```
```
Install node and then use npm install it will fetch all the dependencies for project.
```

### Project Features

```
1- Signup and Login
```
```
2- Save user trips
```
```
3- Get weather conditions automatically by using departure date (if the trip is within 16 days)
```
```
4- Eleganat UI
```
```
5- Delete Trip
```

### Extended Features
1- Image of the country will be shown if no record found for trip location.
2- User can delete trip.
3- User can add multiple destinations but each destination will be shown in a separate card with date and weather.
