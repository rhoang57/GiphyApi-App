# GiphyApi-App
URL: https://rhoang57.github.io/GiphyApi-App/

Project Objectives: To develop an application that allows users to enter a gif search phrase, click a submit button, have a button with their search phrase append to their html, and become a clickable button that returns a selection of gifs from the Giphy API.

Process (Solutions and Technical Considerations):

Front-end considerations:Divs were created to hold a series of search buttons upon page load, that would also allow dynamically created buttons to be appended. An input search field was also created for users to input their search request, and a submit button with to call the Giphy API. JavaScript and Jquery were used to add dynamic HTML content to the site.

API/JavaScript/Ajax/jQuery considerations: Like many APIs, developers need to obtain an access key for Giphy API data. Giphy API's documentation also offered the proper syntax to generated a proper query URL that included desired parameters. In JavaScript, an array of topics was initially stored in an array, and as the user added search phrases, the array would be appended, and new buttons would be dynamically generated. Once the button was appended to the HTML div, a user could click it to return search results from the Giphy API. Using an ajax GET method with the properly constructed queryURL, a for loop was implemented to create dynamic elements and attributes to the HTML. Some of the elements include ratings text, img elements, and other attributes such as various states of the gif (still or animated). Dynamically appended images could then be clicked by the users on the front end to toggle between two states: still or animated.
