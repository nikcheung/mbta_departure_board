# MBTA Departure Board

### API specification:
https://www.mbta.com/developers/v3-api

### Real-life analogue:
https://commons.wikimedia.org/wiki/File:North_Station_departure_board,_December_2011.jpg

### Project Checklist:
##### Setup
  - [x] Django
  - [x] Webpack
  - [x] Babel/TypeScript
  - [x] React
##### Pages
  - [x] List of stops
  - [ ] Departures for particular stop
    - [ ] Carrier
    - [x] Departure time
    - [ ] Destination
    - [ ] Train number
    - [ ] Track number
    - [ ] Status
##### Nice to have
  - [x] API client class to keep http logic out of components
  - [ ] ~API key to avoid rate limiting (currently 20/min)~
    - [ ] Server endpoint to hit external service
    - [ ] Front end hits the server rather than external service
    - [ ] Environment variables to store the api key securely
  - [ ] Cosmetics
    - [ ] Presentable markup
    - [ ] SASS