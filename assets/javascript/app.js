var terms = "";
var urlBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
var authKey = "f00d8dbd623a99f7d310810bf38cff90:9:74629258";
var beginDate = 0;
var endDate = 0;

$("#submit").click(function() {
	$("#articleArea").empty();
	terms = $("#searchTerms").val().trim();
	terms = terms.replace(/ /g, "+");
	numberOfArticles = $("#recordNum option:selected").val()
	console.log(terms)
	console.log(numberOfArticles)
	// console.log( $("#searchTerms").val() )
	// console.log( $("#recordNum option:selected").val() );

	// Need to make date..
	beginDate = $("#startYear").val()
	endDate = $("#endYear").val()

	 // &begin_date=20060101&end_date=20101231


	 console.log(beginDate);
	 console.log(endDate);

	// var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+terms+"&api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258";
	var url = urlBase + authKey + "&q=" +terms;

	if ( parseInt(beginDate)) {
		 url = url + "&begin_date=" + beginDate + "0101";
	};

	if ( parseInt(endDate)) {
		 url += "&end_date=" + endDate + "1231";
	};

	

	$.ajax({url: url, method: 'GET'}).done(function(article) {
		console.log(url)
	 	console.log(article);

	 	for (i = 0; i < numberOfArticles; i++) {

	 		var div = $("<div>")

	 		// var title = $("<h3>")
	 		// title.text(article.response.docs[i].headline.main);
	 		// var title = article.response.docs[i].headline.main;

	 		// var abstract = $("<p>")
	 		// abstract.addClass("italics")
 			// abstract.text(article.response.docs[i].snippet)


	 		// var author = $("<p>")
	 		// author.text(article.response.docs[i].byline.original)
	 		// var author = article.response.docs[i].byline.original;

	 		// var section = $("<p>")
	 		// section.text("Section: " +article.response.docs[i].section_name)
	 		// var section = article.response.docs[i].section_name;

	 		// var date = $("<p>");
	 		// date.text(article.response.docs[i].pub_date)
	 		// var date = article.response.docs[i].pub_date;

	 		var link = $("<a>");
	 		link.attr("href", article.response.docs[i].web_url);
	 		link.attr("target", "_blank");
	 		link.text(article.response.docs[i].web_url)


	 		div.addClass("well")

	 		div.append("<h3>" + article.response.docs[i].headline.main + "</h3>")
	 		// div.append(title)
	 		div.append("<p class='italics'>" + article.response.docs[i].snippet + "</p>")
	 		// div.append(abstract)


	 		if (article.response.docs[i].byline && article.response.docs[i].byline.hasOwnProperty("original")) {
	 			div.append("<p>" + article.response.docs[i].byline.original + "</p>")
	 		}
	 		// div.append("<p>" + article.response.docs[i].byline.original + "</p>")



	 		// div.append(author)
	 		div.append("<p>Section: " + article.response.docs[i].section_name + "</p>")
	 		// div.append(section)
	 		div.append("<p>" + article.response.docs[i].pub_date + "</p>")
	 		// div.append(date)
	 		div.append(link)
	 		div.append("<br>")

	 		// $("#info").append(article.response.docs[i].abstract)

	 		$("#articleArea").append(div)
	 	};

	});

	// doesn't work....
	return false;

});

$("#reset").click(function() {
	$("#articleArea").empty();
})
