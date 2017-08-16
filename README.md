Interactive Thermostat App

## Overview ##

Thermostat app written in Javascript enabling the user to change temperature and turn powersaving mode on and off. This triggers a warning for high and low usage depending on temperature. The user can also display current outside temperature in a selection of cities.

## Technology ##

Written in Javascript with the help of Jquery and uses Jasmine for testing. I use Ajax call to retrieve the temperature from a weather site. For the JS code I used two files, one for the controller that controls what is shown on the page and the model file that provides the business logic. I employ the prototype pattern in the model and the controller also uses modular design. Local (in browser storage) is used to store the set temperature from  previous use.

## how to use ##

clone the repo and open Thermostat.html file in the browser. To run the test open Specrunner.html in the browser. 
