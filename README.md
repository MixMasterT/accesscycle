# TEST PROJECT

## Showing You Bicycle Rental Availability

You may not know about where in the world bike rental is available as a
means of transportation. Rental bikes have become a popular option for
transit systems in cities around the world. For example, in Taiwan several
cities offer bike rental with metro passes, allowing users to ride to a
destination, and then check the bike back in to a locked bike station.

This Website shows where bike rental is available, and gives information
about the availability of bikes and bike locking stations. Data for this
frontend project is draws from the [CityBikes API](http://api.citybik.es/v2/)

## Complications Along the Way

1. The first complication was choosing the information to show. Exploring
possibilities available through the provided list of open-apis I settled
on the CityBikes API because I love environmentally friendly products, and
leisure sports.

1. The second challenge was to determine how I might provide this information
in a compelling way.

1. After setting up a basic list of cities and countries that have bike
rental, I created a component to show what networks are available in a given
country or city by clicking on that country or city. However, this resulted
in duplicate network names, since the API provides a separate network object
for each municipal location of that network. I want this to be reflected as
a single network from the level of a country-wide filter. I decided to take
advantage of Underscore.js Array function 'uniq' that filters out duplicates
on the names list only. This required a slight refactoring of what I passed
in to the networks React component.

1. The most significant limitation was time. I was unable to make this into
what I wanted it to be in a reasonable amount of time.

## How to Run
In order to test this out, simply clone the repo, run 'yarn install' or
'npm install' and then run 'yarn start' or 'npm start'. A dev server should
be fired up and you will be able to view the current state of this project
through a browser at localhost:8080.

## Intentions

This project was very open-ended, and that is a problem for me. I spent
too much time considering various possibilities, and then chose something
too ambitious for my current time frame. As a result, I have a half-baked
project.

However, all is not lost. I am excited about where this is going, and I did
enjoy the process. My plan is to continue building this to make a helpful
site that travelers can use to find bicycle rental access for commuting and
touring.

Riding a bicycle is a great way to see a city, and I hope this project
can help people find easy access to bicycles at some point in the future.

When complete, this project will feature filterable lists of countries and
cities that are listed in the CityBikes API. Travelers will be able to
click on a city or country and view a list of the bicycle rental networks
that are available in that city or country. Clicking on any of the listed
networks will then reveal a map with all of the bicycle racks in that network
and the pins for those racks will show how many bikes and docking slots are
available at each rack location.
