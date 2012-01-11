$(document).ready(function() {	
	$("h1, h2, h3, h4, h5, h6, p").each(function() {
	    var wordArray = $(this).text().split(" ");
	    wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
	    wordArray.pop();
	    $(this).html(wordArray.join(" "));
	});
	
	$("h1:contains('&'), h2:contains('&'), h3:contains('&'), h4:contains('&'), h5:contains('&')", document.body).contents().each(function() {
		if( this.nodeType == 3 ) {
			$(this).replaceWith( this.nodeValue.replace( /&/g, "<span class='amp'>&</span>" ));
		}
	});
});