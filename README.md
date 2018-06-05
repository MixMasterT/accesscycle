# ~~AccessCycle~~ CycleList

## Showing You Bicycle Rental Availability

You may not know about where in the world bike rental is available as a
means of transportation. Rental bikes have become a popular option for
transit systems in cities around the world. For example, in Taiwan several
cities offer bike rental with metro passes, allowing users to ride to a
destination, and then check the bike back in to a locked bike station.

This Website shows where bike rental is available, and gives information
about the availability of bikes and bike locking stations. Data for this
frontend project is draws from the [CityBikes API](http://api.citybik.es/v2/)

## How to Run
In order to test this out, simply clone the repo, run 'yarn install' or
'npm install' and then run 'yarn start' or 'npm start'. A dev server should
be fired up and you will be able to view the current state of this project
through a browser at localhost:8080. Also, a minified build is currently
hosted at [cycleList](https://mixmastert.github.io/accesscycle/)

## Features

1. Shows a filterable list of cities or countries that have rental-bike networks listed in the citybik.es api.

1. Shows a map that includes yellow 'N' pins for every location that has
a bike network in the api.

1. Clicking on a city or country in the locations list will zoom the map
in on that region, and populate the networks dropdown with the networks
listed for that location.

1. Clicking on one of the networks in the networks dropdown further zooms
in on that network location, and adds bicycle icons to each station location.

1. Clicking on any of the bike station locations opens a table showing the
address of that station, as well as the number of bicycles available, and
the number of empty slots available for locking a bike into. This can be
helpful if you are either looking for a bike to rent, or a slot to park in.

## Technology

This is a purely frontend project that uses webpack for bundling, React.js
for its main component stack, and redux for state management.

#### Maps

The map for this project uses the [google maps api](https://developers.google.com/maps/documentation/javascript/tutorial).

A custom MarkerManager class was created in JavaScript to manage markers
on the map.

#### Challenges

During the course of development, a few challenges popped up along the way.
Brief descriptions of these along with the solutions that were implemented
are listed below.

1. API does not always provide station address. Luckily, the google maps
api includes a feature called reverse geocoding. When the address is not
provided, this feature is used to query for the address based on the gps
coordinates, which are reliably provided by the citybik api.

1. The red marker that appears over a currently selected station remains there until either a new location is selected or a new station is selected. I want this marker to disappear when the station table is closed. So far no fix has been implemented for this issue.
