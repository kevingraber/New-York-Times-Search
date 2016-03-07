var terms;

$("#submit").click(function() {
	$("#articleArea").empty();
	terms = $("#searchTerms").val();
	numberOfArticles = $("#recordNum option:selected").val()
	console.log(terms)
	console.log(numberOfArticles)
	// console.log( $("#searchTerms").val() )
	// console.log( $("#recordNum option:selected").val() );

	// Need to make date..
	// &begin_date=20060101&end_date=20101231


	var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+terms+"&api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258";

	console.log(url)

	$.ajax({url: url, method: 'GET'}).done(function(article) {
	 	console.log(article);

	 	for (i = 0; i < numberOfArticles; i++) {

	 		var div = $("<div>")

	 		var title = $("<h3>")
	 		title.text(article.response.docs[i].headline.main);
	 		// var title = article.response.docs[i].headline.main;
	 		var abstract = $("<p>")
	 		abstract.addClass("italics")
 			abstract.text(article.response.docs[i].snippet)

	 		var author = $("<p>")
	 		author.text(article.response.docs[i].byline.original)
	 		// var author = article.response.docs[i].byline.original;
	 		var section = $("<p>")
	 		section.text("Section: " +article.response.docs[i].section_name)
	 		// var section = article.response.docs[i].section_name;
	 		var date = $("<p>");
	 		date.text(article.response.docs[i].pub_date)
	 		// var date = article.response.docs[i].pub_date;

	 		var link = $("<a>");
	 		link.attr("href", article.response.docs[i].web_url);
	 		link.text(article.response.docs[i].web_url)


	 		div.addClass("well")

	 		div.append(title)
	 		div.append(abstract)
	 		div.append(author)
	 		div.append(section)
	 		div.append(date)
	 		div.append(link)
	 		div.append("<br>")

	 		// $("#info").append(article.response.docs[i].abstract)

	 		$("#articleArea").append(div)
	 	}

	});

});

$("#reset").click(function() {
	$("#articleArea").empty();
})
