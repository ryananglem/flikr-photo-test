##flikr-photo-test

This is small web application to display a grid of photos from flikr.  
 
When a photo is clicked, the photo displays in a larger size with its tags and title. 
Clicking the 'load more..' button will retrieve more images

####To Run:
After cloning repo 

`npm install`

`npm start` 

###Notes:

The app uses react and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) 
using the recommendations and tooling (webpack, babel et al) provided therein, note that this includes not 
using a css pre-processor, although it does include a css post-processor.


The feeds from the flickr API are opaque for 'no-cors' requests, so in order to structure the app in  a 'react-like'
 manner API calls return json and process it, rather than manipulating via jsonp, although
the format of the feed json structure ia maintained.

There are no tests other than a basic test to prove the site renders (this is not something I'd normally do)

In addition:

- redux is used to handle application state
- react-router is used for page routing 
- there is a static version of the api in /api/static 








