// on page load, search for & display a random gif matching your search term using the Giphy API.
// usage: 
//   include giphy.js in your <head>
//   set q to your search term (e.g. "brunch")
//   add <span id = "giphyme"></span> wherever you want to display the image. -- FYI, it will be centered.
// big ups to the Giphy crew (giphy.com)
// 2014 - Neal Shyam [@nealrs | nealshyam.com]

document.addEventListener('DOMContentLoaded', function () {
	q = "mark zuckerberg speech"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=2efbb11186e743e3b143c01474f6d52d&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_original_url;
			datawidth = JSON.parse(request.responseText).data.image_width;
			dataheight = JSON.parse(request.responseText).data.image_height;
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<div style = "background: linear-gradient(146deg, rgba(116, 235, 213, 1) 0%, rgba(159, 172, 230, 1) 100%),url('+data+') center / cover no-repeat;"  ></div>';
		
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});

// minimal demo 

//<html>
//<head>
//	<title>giphy.js demo</title>
//	<script src="giphy.js"></script>
//</head>
//<body>
//	<span id = "giphyme"></span>
//</body>
//</html>