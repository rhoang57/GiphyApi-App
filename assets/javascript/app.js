//create a variable and save an array of strings related to food items 
var topics = ["pizza", "chicken", "potato chips", "cheeseburger", "sushi", "hotdogs", "pies", "spaghetti", "burrito", "taco", "donuts", "salad", "french fries", "hot pockets"];
//declare variables button and newTopic to be entered by user later
var button;
var newTopic = ""; // new topic that will be added via the input field 

// function to create new buttons from the topics array
var buttonGenerator = function (){
	// the previous div elements are emptied 
	 $("#buttonArea").empty();
	// creating a for loop that goes through the array stored in the variable 'topics' and makes buttons for them and appends them to the div with id 'buttonArea'
	for(i = 0; i < topics.length; i++) {
		button = $("<button type = button>" + topics[i] + "</button>").addClass("btn btn-success").attr("data",topics[i]);
		$("#buttonArea").append(button);
	};
}


// User clicks on a dynamically generated button, which generates 10 still gif images from the GIPHY API and places them on the page. 
$("#buttonArea").on("click", ".btn", function(){
  		var newSearch = $(this).attr("data");
  		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newSearch + "&api_key=n1Hc7vH2Vax0hwe4ECg3efKyS2L4Gs0f&limit=10";



  		$.ajax({
  			url: queryURL,
  			method: "GET" 

  		}).then(function(response){
  			console.log(response);
  			
          	var results = response.data;

          	for (var i = 0; i < results.length; i++) {
          		// a div is created to hold a gif of any topic
	          	var topicDiv = $("<span>").addClass("inlineB");
	 			
	          	// add rating from GIPHY API under each image
	 			var p = $("<p>");
	 			p.text(results[i].rating);
	 			var p = $("<p>").text("Rating: " + results[i].rating);

	 			// add a CSS style to createborders around the gifs
			
				 var topicImage = $("<img>").addClass("picBorder");

	 			// add states of animate and still which will be toggled 
	 			topicImage.attr("src", results[i].images.fixed_height_still.url);
	 			topicImage.attr("data-still", results[i].images.fixed_height_still.url);
	 			topicImage.attr("data-animate", results[i].images.fixed_height.url)
	 			topicImage.attr("data-state", "still")
	 			topicImage.addClass("gif");
	 			
	 			// image is appended to the div
	 			topicDiv.append(topicImage);
	 			// rating is appended to the div below the gif
	 			topicDiv.append(p); 			
	 			// new images will be placed at the beginning (top) of the containing gif area
	 			$("#gifArea").prepend(topicDiv);
 			}
  		})
  })


// When the user clicks one of the still GIPHY images, and it animates. When the user clicks the gif again, it stops playing.
$("#gifArea").on("click", ".gif", function(event){
	event.preventDefault();
	
	// gets the current state of the clicked gif 
	var state = $(this).attr("data-state");
	
	// according to the current state gifs toggle between animate and still 
	if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

})
   

// The form takes the value from the input box and adds it into the topics  array. The buttonGenerator function is called that takes each topic in the array remakes the buttons on the page.


$(".submit").on("click", function(event){
	event.preventDefault();

	console.log("submit");
	// sets inputted value to newTopic 
	newTopic = $("#topic-input").val();
	// new topic is added to the topics array 
	topics.push(newTopic);
	console.log(topics);
	// call the function that creates the new button
	buttonGenerator();
});



buttonGenerator();